export const fetchInitDiagram = async () => {
 
  const res = await fetch(process.env.REACT_APP_USER+'/diagram');
  const data = await res.json();
  return data;
};
