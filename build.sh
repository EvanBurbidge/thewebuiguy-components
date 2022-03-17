
rm -rf ./temp
rm -rf ./lib

mkdir temp

cp -r ./src/components/ ./temp
cp -r ./src/utils ./temp
cp -r ./src/constants ./temp
cp -r ./src/hooks ./temp

cd ./temp;
for d in */; do
  cd $d
  echo "$d";
  rm -rf ./__tests__
  rm -rf *.stories.tsx
  cd ../
done

cd ../

rm -rf ./lib

tsc --project tsconfig.build.json

rm -rf ./temp