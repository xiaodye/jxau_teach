import React from "react"
import pdfFilePath from "@/assets/pdf/effect.pdf"
import PdfContainer from "@/components/pdfContainer"

export default function OutcomeEffect() {
  return <PdfContainer pdfFilePath={pdfFilePath} />
}
