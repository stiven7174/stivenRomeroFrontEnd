import BarraNavegacion from "./Header.jsx";

function App() {
  return (
    <div>
      <BarraNavegacion></BarraNavegacion>
    </div>
  );
}   

export default App;






















// import React, { useState, useEffect } from "react";

function TeamModal({ team, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Mi Equipo</h2>
        <ul>
          {team.map((member) => (
            <li key={member.uuid}>{member.displayName}</li>
          ))}
        </ul>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

// function Pagination({ totalPages, currentPage, setCurrentPage }) {
//   const pageNumbers = [];
//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div className="pagination">
//       <button
//         onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//         disabled={currentPage === 1}
//       >
//         Anterior
//       </button>
//       {pageNumbers.map((number) => (
//         <button
//           key={number}
//           onClick={() => setCurrentPage(number)}
//           className={currentPage === number ? "active" : ""}
//         >
//           {number}
//         </button>
//       ))}
//       <button
//         onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//         disabled={currentPage === totalPages}
//       >
//         Siguiente
//       </button>
//     </div>
//   );
// }

// function App() {
//   const [agents, setAgents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchText, setSearchText] = useState("");
//   const [selectedRole, setSelectedRole] = useState("");
//   const [team, setTeam] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const [currentPage, setCurrentPage] = useState(1);
//   const agentsPerPage = 6;

//   useEffect(() => {
//     fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
//       .then((response) => response.json())
//       .then((data) => {
//         setAgents(data.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los agentes:", error);
//         setLoading(false);
//       });
//   }, []);

//   const addToTeam = (agent) => {
//     if (team.length >= 5) {
//       alert("Has alcanzado el límite máximo de 5 agentes en el equipo.");
//       return;
//     }
//     if (!team.some((member) => member.uuid === agent.uuid)) {
//       setTeam([...team, agent]);
//     }
//   };

//   const filteredAgents = agents.filter((agent) => {
//     const matchesText = agent.displayName
//       .toLowerCase()
//       .includes(searchText.toLowerCase());
//     const matchesRole = selectedRole
//       ? agent.role && agent.role.displayName === selectedRole
//       : true;
//     return matchesText && matchesRole;
//   });

//   const indexOfLastAgent = currentPage * agentsPerPage;
//   const indexOfFirstAgent = indexOfLastAgent - agentsPerPage;
//   const currentAgents = filteredAgents.slice(
//     indexOfFirstAgent,
//     indexOfLastAgent
//   );
//   const totalPages = Math.ceil(filteredAgents.length / agentsPerPage);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchText, selectedRole]);

//   if (loading) {
//     return <p>Cargando...</p>;
//   }

//   return (
//     <div className="container">
//       <h1 className="title">Agentes de Valorant</h1>
//       <div className="filters">
//         <input
//           type="text"
//           placeholder="Buscar agente..."
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           className="search-input"
//         />
//         <select
//           value={selectedRole}
//           onChange={(e) => setSelectedRole(e.target.value)}
//           className="role-select"
//         >
//           <option value="">Todos los roles</option>
//           <option value="Controller">Controlador</option>
//           <option value="Duelist">Duelista</option>
//           <option value="Initiator">Iniciador</option>
//           <option value="Sentinel">Centinela</option>
//         </select>
//         <button
//           className="view-team-button"
//           onClick={() => setIsModalOpen(true)}
//         >
//           Ver Equipo ({team.length})
//         </button>
//       </div>
//       <div className="agents-grid">
//         {currentAgents.length > 0 ? (
//           currentAgents.map((agent) => (
//             <div key={agent.uuid} className="agent-card">
//               <img
//                 src={agent.displayIcon}
//                 alt={agent.displayName}
//                 className="agent-image"
//               />
//               <h3>{agent.displayName}</h3>
//               <button
//                 onClick={() => addToTeam(agent)}
//                 className="add-to-team-button"
//               >
//                 Agregar al equipo
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No se encontraron agentes que coincidan con la búsqueda.</p>
//         )}
//       </div>
//       <Pagination
//         totalPages={totalPages}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//       />
//       {isModalOpen && (
//         <TeamModal team={team} onClose={() => setIsModalOpen(false)} />
//       )}
//     </div>
//   );
// }

// export default App;
