export default async function handler(req,res){
const {url}=req.query;
if(!url) return res.status(400).send('Missing URL');
try{
 const r=await fetch(url);
 const t=await r.text();
 res.setHeader('Access-Control-Allow-Origin','*');
 res.status(200).send(t);
}catch(e){res.status(500).send('Fetch failed');}
}