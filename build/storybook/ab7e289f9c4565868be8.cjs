let urlAlphabet="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",customAlphabet=(alphabet,size)=>()=>{let id="",i=size;for(;i--;)id+=alphabet[Math.random()*alphabet.length|0];return id},nanoid=(size=21)=>{let id="",i=size;for(;i--;)id+=urlAlphabet[64*Math.random()|0];return id};module.exports={nanoid:nanoid,customAlphabet:customAlphabet};