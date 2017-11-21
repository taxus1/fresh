#!/bin/sh
file_name=$1
if [ "$file_name" = "" ];
then
	echo "missing input file_name."
	exit 2
fi

echo "generate go protobuf file_name: $file_name.proto"

protoc --go_out=./ ./$file_name/$file_name.proto

pbjs -t static-module -w commonjs -o ./$file_name/$file_name.js ./$file_name/$file_name.proto

echo "done"
