function Cuerpo() {
  return (
    <>
      <div className="border border-slate-700 m-3 p-3 sm:grid grid-cols-3 ">
        <Cartas></Cartas>
        <Cartas></Cartas>
        <Cartas></Cartas>
      </div>
    </>
  );
}
function Cartas() {
  return (
    <div className=" m-2 bg-gradient-to-br from-purple-700 to-blue-500 p-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl ">
      <img
        className="  "
        src="https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S2_1200x1600-4a220c0d250f630906bfea63e865dfed"
        alt=""
      />
      <button className="text-white text-2xl font-bold mb-2">DETAILS</button>
         
    </div>
  );
}
export default Cuerpo;
