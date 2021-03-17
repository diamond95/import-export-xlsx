## Import & export XLS / XLSX / XLSM
    Simple javascript example for import, parse data, export

## Project setup
```bash
npm i xlsx
```

## Vue / HTML usage
```vue
<input
    ref="uploader"
    class="d-none"
    type="file"
    accept=".xlsx, .xls, .xlsm"
    @change="importFile"
/>
```

## Javascript / Vue import usage
```vue
import Import from "@/models/Import";
export default {
  name: "ImportExample",
  components: {},
  mixins: [],
  data: () => ({
      error: null,
      tableData: [],
      import: undefined,
  })
  methods: {
      async importFile(event) {

      this.import = new Import();

      try {

        await this.import.uploadFile(event);

        if(!this.import.isAppropriateSize()) { this.error = `File is too big.`; return false;} 

        this.tableData = await this.import.readExcelSheets();

        this.import.resetSelectedFile();

      } catch (error) {
        this.error = `Oops, something went wrong with importing file.`;
      }
    },
  }
```