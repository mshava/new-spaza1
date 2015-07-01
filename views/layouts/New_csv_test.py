import csv

f = open('nelisa_sales.csv')
csv_f = csv.reader(f)

products = {}

for row in csv_f:
	currentItem = row[2]
	numberSold = row[3]

	if not products.has_key(currentItem):
		products[currentItem] = 0
	products[currentItem] += int(numberSold)
	
print products
"""
def ProductList()

#for Item,qyt in products.Items()

"""
