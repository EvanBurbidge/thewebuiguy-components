const deps = require("./package.json").dependencies;
module.exports = {
  name: 'thewebuiguy',
  filename: 'remoteEntry.js',
  exposes: {
    './Alert': './src/components/alerts/Alert.tsx',
    './Button': './src/components/buttons/Button.tsx',
    './ButtonOutline': './src/components/buttons/ButtonOutline.tsx',
    './NoData': './src/components/errors/NoData.tsx',
    './Input': './src/components/inputs/Input.tsx',
    './AccountDetailsLayout': './src/components/layouts/AccountDetailsLayout.tsx',
    './ExternalLink': './src/components/links/ExternalLink.tsx',
    './Pagination': './src/components/pagination/Pagination.tsx',
    './Pull': './src/components/status/Pill.tsx',
    './Table': './src/components/table/Table.tsx',
    './TableCell': './src/components/table/TableCell.tsx',
    './TableHeader': './src/components/table/TableHeader.tsx',
    './TableHeaderSortIndicator': './src/components/table/TableHeaderSortIndicator.tsx',
    './TableLoader': './src/components/table/TableLoader.tsx',
    './TableLoaderBody': './src/components/table/TableLoaderBody.tsx',
    './TableRow': './src/components/table/TableRow.tsx',
    './TableSortPill': './src/components/table/TableSortPill.tsx',
    './TitleTabs': './src/components/tabs/TitleTabs.tsx',
    './HomePageTitle': './src/components/titles/HomePageSectionTitle.tsx',
    './PageTitle': './src/components/titles/PageTitle.tsx',
    './SectionTitle': './src/components/titles/SectionTitle.tsx',
  },
  // shared: {
  //   ...deps,
  //   react: {
  //     singleton: true,
  //     requiredVersion: deps["react"],
  //   },
  //   "react-dom": {
  //     singleton: true,
  //     requiredVersion: deps["react-dom"],
  //   },
  // },
};