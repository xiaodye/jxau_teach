import React, { useState } from "react"
import { Button, Spin } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { Document, Page, pdfjs } from "react-pdf"
import styles from "./index.module.scss"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cat.net/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function PdfContainer(props) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  /**
   * 加载成功回调
   * @param {string} numPages 总页数
   * @returns
   */
  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages)

  /**
   * 上一页、下一页
   */
  const takePrev = () => setPageNumber(pageNumber - 1)
  const takeNext = () => setPageNumber(pageNumber + 1)

  return (
    <div className={styles.root}>
      {/* 展示pdf */}
      <Document
        className="doc"
        file={props.pdfFilePath}
        loading={<Spin size="large" tip="Loading..." />}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>

      <div className="action">
        <div className="action-operations">
          <Button className="btn" onClick={takePrev} icon={<LeftOutlined />} disabled={pageNumber <= 1 ? true : false}></Button>
          <Button
            className="btn"
            onClick={takeNext}
            icon={<RightOutlined />}
            disabled={pageNumber >= numPages ? true : false}
          ></Button>
          <Button type="primary">{pageNumber + " / " + numPages}</Button>
        </div>

        <div className="action-link">
          <Button type="primary">
            <a href={props.pdfFilePath} target="_blank" rel="noreferrer">
              新窗口打开PDF
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
