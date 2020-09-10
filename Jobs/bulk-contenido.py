from pymongo import MongoClient
import pandas as pd 



client = MongoClient("mongodb+srv://admin:passwordpassword@cluster0.39zbm.mongodb.net/<dbname>?retryWrites=true&w=majority")
db = client.test
seleccion = db['seleccion']

content = pd.read_csv('Jobs\seleccionMultiple.csv')
content.fillna(value='', inplace=True) 
counter = 1
dictcounter = 0
data = {'_id': str(counter)}
toinsert = []
for c in range(len(content.columns)):
    data[content.columns[c]] = ''

for x in range(len(content)):
    for key in data:
        if key == '_id':
            data[key] = str(counter)
        else:
            t = content.iat[x, dictcounter]
            data[key] = str(t)
            dictcounter += 1
    seleccion.insert_one(data)
    toinsert.append(data)
    dictcounter = 0
    counter += 1


