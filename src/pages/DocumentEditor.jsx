import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);

const DocumentEditor = () => {
  return (
    <DocumentEditorContainerComponent id="container" height={'880px'} serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" enableToolbar={true}/>
  )
}

export default DocumentEditor