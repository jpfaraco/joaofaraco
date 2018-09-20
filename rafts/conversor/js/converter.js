// 
//  converter.js
//  Mr-Data-Converter
//  
//  Created by Shan Carter on 2010-09-01.
// 

function DataConverter(nodeId) {

  //---------------------------------------
  // PUBLIC PROPERTIES
  //---------------------------------------
  
  this.nodeId                 = nodeId;
  this.node                   = $("#"+nodeId);
  
  this.columnDelimiter        = "\t";
  this.rowDelimiter           = "\n";
  
  this.inputTextArea          = {};
  this.outputTextArea         = {};
  
  this.inputHeader            = {};
  this.outputHeader           = {};
  this.dataSelect             = {};
  
  this.inputText              = "";
  this.outputText             = "";
  
  this.newLine                = "\n";
  this.indent                 = "  ";
  
  this.commentLine            = "//";
  this.commentLineEnd         = "";
  
  this.useUnderscores         = true;
  this.headersProvided        = true;
  this.downcaseHeaders        = true;
  this.upcaseHeaders          = false;
  this.includeWhiteSpace      = true;
  this.useTabsForIndent       = false;
  
}

//---------------------------------------
// PUBLIC METHODS
//---------------------------------------

DataConverter.prototype.create = function(w,h) {
  var self = this;
  
  //build HTML for converter
  this.inputHeader = $('<div id="input"><div class="groupHeader" id="inputHeader"><p class="groupHeadline">Cole seus dados aqui.</p></div>');
  this.inputTextArea = $('<textarea class="textInputs" id="dataInput"></textarea></div>');
  this.outputHeader = $('<div id="result"><div class="groupHeader" id="inputHeader"><p class="groupHeadline resultHeadline">Copie o XML gerado e salve-o em um arquivo texto com termina&ccedil;ão <strong>.xml</strong>.</p></div>');
  this.outputTextArea = $('<textarea class="textInputs" id="dataOutput"></textarea></div>');
  
  this.node.append(this.inputHeader);
  this.node.append(this.inputTextArea);
  this.node.append(this.outputHeader);
  this.node.append(this.outputTextArea);
  
  $('.resultHeadline').hide();
  
  //add event listeners
  
  this.outputTextArea.click(function(evt){this.select();});
  
  $("#dataInput").keyup(function() {self.convert()});
  $("#dataInput").change(function() {
    self.convert();
  });
  
  this.resize(w,h);
}

DataConverter.prototype.resize = function(w,h) {
  
  var paneWidth = w;
  var paneHeight = (h-90)/2-20;
  
  this.node.css({width:paneWidth});
  this.inputTextArea.css({width:paneWidth-20,height:paneHeight});
  this.outputTextArea.css({width: paneWidth-20, height:paneHeight});
  
}

DataConverter.prototype.convert = function() {
  
  this.inputText = this.inputTextArea.val();
  this.outputText = "";
  
  
  //make sure there is input data before converting...
  if (this.inputText.length > 0) {
    
    if (this.includeWhiteSpace) {
      this.newLine = "\n";
      // console.log("yes")
      $('.resultHeadline').fadeIn('slow');
    } else {
      this.indent = "";
      this.newLine = "";
      // console.log("no")
    }
    
    CSVParser.resetLog();
    var parseOutput = CSVParser.parse(this.inputText, this.headersProvided, this.delimiter, this.downcaseHeaders, this.upcaseHeaders);
    
    var dataGrid = parseOutput.dataGrid;
    var headerNames = parseOutput.headerNames;
    var headerTypes = parseOutput.headerTypes;
    var errors = parseOutput.errors;
      
    this.outputText = DataGridRenderer(dataGrid, headerNames, headerTypes, this.indent, this.newLine);
    
    
    this.outputTextArea.val(errors + this.outputText);
    
  }; //end test for existence of input text
}


