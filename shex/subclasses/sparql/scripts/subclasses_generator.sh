#! /bin/bash
echo 'This script will create a schema for each defined item';
echo 'The schema generated will contain all the subclasses of the item';

echo 'Building image...'
docker pull wesogroup/shex-subclass-generator
while IFS="," read -r rec_column1 rec_column2
do
	docker run  -v D:/Repositories/genewikisub/shex/subclasses/sparql/scripts/:/app wesogroup/shex-subclass-generator $rec_column1 $rec_column2
	echo "Generated subclasses schema for $rec_column1 $rec_column2"
done < shapeslist.csv