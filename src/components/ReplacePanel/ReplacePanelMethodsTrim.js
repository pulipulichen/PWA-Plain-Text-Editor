export default function (ReplacePanel) {
  ReplacePanel.methods.trimTextContent = function () {
    this.saveHistory()

    this.localConfig.textContent = this.textContentLines.map(line => line.trim()).join('\n')
  }
  ReplacePanel.methods.ltrimTextContent = function () {
    this.saveHistory()

    this.localConfig.textContent = this.textContentLines.map(line => {
      let char = line.trim().slice(0, 1)
      let index = line.indexOf(char)
      if (index === 0) {
        return line
      } else {
        return line.slice(index)
      }
    }).join('\n')
  }
  ReplacePanel.methods.rtrimTextContent = function () {
    this.saveHistory()

    this.localConfig.textContent = this.textContentLines.map(line => {
      let char = line.trim().slice(-1)
      let index = line.lastIndexOf(char)
      if (index === line.length - 1) {
        return line
      } else {
        return line.slice(0, index + 1)
      }
    }).join('\n')
  }
  /*
   formatCode () {
   if (this.isFormatJSONEnabled) {
   return this.formatJSONTextContent()
   }
   else if (this.isFormatXMLEnabled) {
   return this.formatXMLTextContent()
   }
   },
   formatJSONTextContent () {
   this.saveHistory()
   
   if (this.textContentTrim.startsWith('{') 
   && this.textContentTrim.endsWith('}')) {
   try {
   //let object = JSON.parse(this.textContentTrim)
   let object
   eval('object = ' + this.textContentTrim)
   this.localConfig.textContent = JSON.stringify(object, null, 2)
   }
   catch (e) {
   return false
   }
   }
   return false
   },
   formatXMLTextContent () {
   this.saveHistory()
   
   this.localConfig.textContent = this.prettifyXml(this.textContentTrim)
   },
   prettifyXml (sourceXml) {
   var xmlDoc = new DOMParser().parseFromString(sourceXml, 'application/xml');
   var xsltDoc = new DOMParser().parseFromString([
   // describes how we want to modify the XML - indent everything
   '<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">',
   '  <xsl:strip-space elements="*"/>',
   '  <xsl:template match="para[content-style][not(text())]">', // change to just text() to strip space in text nodes
   '    <xsl:value-of select="normalize-space(.)"/>',
   '  </xsl:template>',
   '  <xsl:template match="node()|@*">',
   '    <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>',
   '  </xsl:template>',
   '  <xsl:output indent="yes"/>',
   '</xsl:stylesheet>',
   ].join('\n'), 'application/xml');
   
   var xsltProcessor = new XSLTProcessor();    
   xsltProcessor.importStylesheet(xsltDoc);
   var resultDoc = xsltProcessor.transformToDocument(xmlDoc);
   var resultXml = new XMLSerializer().serializeToString(resultDoc);
   return resultXml;
   },
   */
}
    