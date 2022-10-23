import * as ReactDOM from "react-dom";
import * as React from "react";
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  Annotation,
  TextSearch,
  FormFields,
  FormDesigner,
} from "@syncfusion/ej2-react-pdfviewer";
import { useStateContext } from '../contexts/ContextProvider';
PdfViewerComponent.Inject(
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner
);
const PDFViewer = () => {
  const { currentMode } = useStateContext();
  return (
    <PdfViewerComponent
      id="container"
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      height={"900px"}
      documentPath="PDF_Succinctly.pdf"
      serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
    />
  );
};

export default PDFViewer;
