import os
import json

class FeedGenerator(object):
    def __init__(self):
        self.json = ''
        self.dict = {}

    def generate(self):
        path = os.path.dirname(os.path.abspath(__file__)) + os.sep + 'shakemaps'
        event_ids = os.listdir(path)

        # filter files
        event_ids = filter(lambda x: 
                                os.path.isdir(os.path.join(path,x)), 
                            event_ids)

        # filter hidden folders
        event_ids = filter(lambda x: '.' not in x, event_ids)

        event_lst = []
        json_feed = []
        for event_id in event_ids:
            event = {}
            event_path = os.path.join(path, event_id)
            event['id'] = event_id
            event['shakemap'] = []

            contents = {}

            # initiate shakemap info
            info = {'properties': {'event_information': {}}}

            products_path = os.path.join(event_path, 'products')
            products = os.listdir(products_path)

            for product in products:
                name = 'download/' + product.lower()
                url = '/'.join(['shakemaps', 
                                event_id, 
                                'products', 
                                product])

                # add new product to 
                contents[name] = {'url': url}

                if product == 'info.json':
                    with open(url, 'r') as f_:
                        info = json.loads(f_.read())

            event['shakemap'].append({'contents': contents,
                                            'properties': info['input']['event_information']})

            json_feed.append(event)
        
        self.dict = json_feed
        self.json = json.dumps(json_feed, indent=4)

    def write(self):
        with open('products.json', 'w') as f:
            f.write(self.json)
    
if __name__ == '__main__':
    f = FeedGenerator()
    f.generate()
    f.write()


