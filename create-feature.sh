#!/bin/bash
# create-feature feature-name
# script creation : 
# 1/ go to project folder
# 2/ touch create-feature.sh
# 3/ chmod +x create-feature.sh
# 4/ alias create-feature='./create-feature.sh'

if [ "$1" = "" ] 
then 
  echo "Feature name is mandatory (example : create-feature your-feature-name)"
  exit -1;
fi

mkdir -p src/$1 
mkdir -p src/$1/pages src/$1/components src/$1/services src/$1/commons
echo "Feature $1 Created Successfully"