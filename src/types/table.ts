export interface ITableColumn {
  key: string;
  title: string;
  render?: (value: any, row: { [x: string]: any }) => React.ReactNode;
}
