
import csv
 with open('nelisa_sales.csv') as csvfile:
     reader = csv.DictReader(csvfile)
     for row in reader:
        print(row['first_name'], row['last_name'])