const aws = require("aws-sdk");
const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  await fetchAndUpload();
  return "hooray";
};

const fetchAndUpload = async () => {
  const apartments = await getApartments(1, []);
  await uploadFile(apartments);
};

const getApartments = async (currentPage, apartments) => {
  const response = await fetch(
    `https://www.finn.no/api/search-qf?searchkey=SEARCH_ID_REALESTATE_HOMES&location=1.20061.20510&location=1.20061.20509&location=1.20061.20511&price_collective_from=5200000&price_collective_to=6750000&sort=PUBLISHED_DESC&stored-id=55987432&page=${currentPage}&vertical=realestate`
  ).then((res) => res.json());
  const { docs, metadata } = response;
  const { current, last } = metadata.paging;
  const currentApartments = [...docs, ...apartments];

  if (current === last) {
    return currentApartments;
  }
  return getApartments(current + 1, currentApartments);
};

const s3 = new aws.S3({ apiVersion: "2006-03-01" });

async function uploadFile(fileData) {
  const fileName = "v2/" + new Date().toISOString() + ".json";
  const params = {
    Bucket: "finn-api-bucket",
    Key: fileName,
    Body: JSON.stringify(fileData),
  };

  try {
    const response = await s3.upload(params).promise();
    console.log("Response: ", response);
    return response;
  } catch (err) {
    console.log(err);
  }
}
