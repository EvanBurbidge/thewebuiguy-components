
rm -rf ./lib

mkdir lib

cp -r ./src/components/ ./lib
cp -r ./src/hooks ./lib
cp -r ./src/utils ./lib
cp -r ./src/constants ./lib

cd ./lib;
for d in */; do
  cd $d
  echo "$d";
  rm -rf ./__tests__
  rm -rf *.stories.tsx
  cd ../
done;