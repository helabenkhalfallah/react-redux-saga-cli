#!/bin/bash
# create-feature feature-name

if [ "$1" = "" ] 
then 
  echo "Feature name is mandatory (example : create-feature your-feature-name)"
  exit -1;
fi

mkdir -p src/$1 
mkdir -p src/$1/pages src/$1/components src/$1/services src/$1/commons
echo "Feature $1 Created Successfully"