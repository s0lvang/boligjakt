import json
import os

def read_files(directory):
    file_names = os.listdir(directory)
    file_map = {}
    for file_name in file_names:
        with open(directory + file_name, 'r') as f:
            content = f.read()
            content_as_json = json.loads(content)
            
            file_map[file_name] = content_as_json
    return file_map
            

            
def merge_adds(file_map):
    ads = {}
    for key in file_map.keys():
        for apartment_ad in file_map[key]:
            ad_id = apartment_ad["ad_id"]
            if not ads.get(ad_id):
                ads[ad_id] = apartment_ad
            else:
                ads[ad_id] = merge_add(ads[ad_id], apartment_ad)
    return ads

def merge_add(add1, add2):
    merged_add = {key : value if isinstance(value, list) else [value] for key, value in add1.items()}
    for key, value in add2.items():

        if isinstance(value, list):
            merged_add[key] = merged_add[key] + value
        else:
            merged_add[key] = merged_add[key] + [value]
    return merged_add
            




def get_adds():
    file_map = read_files("data/v2/")
    return merge_adds(file_map)


if __name__ == "__main__":
    print(json.dumps(get_adds()))
