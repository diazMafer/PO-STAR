from pymongo import MongoClient
import pandas as pd 



client = MongoClient("mongodb+srv://admin:passwordpassword@cluster0.39zbm.mongodb.net/<dbname>?retryWrites=true&w=majority")
db = client.test
seleccion = db['seleccion']

content = pd.read_csv('Jobs\seleccionMultiple.csv')
content.fillna(value='', inplace=True) 
counter = 1
dictcounter = 0
data = {'id': str(counter)}
toinsert = []
for c in range(len(content.columns)):
    data[content.columns[c]] = ''

for x in range(len(content)):
    for key in data:
        if key == 'id':
            data[key] = str(counter)
        else:
            t = content.iat[x, dictcounter]
            data[key] = str(t)
            dictcounter += 1
    toinsert.append(data)
    dictcounter = 0
    counter += 1

for x in range(len(toinsert)):
    x = seleccion.insert_one(toinsert[x])

