import logo from './logo.svg';
//import './Assets/Style.css';
import './App.css';
import { useState } from 'react';

function App() {
  //ETAT ou STATE
  const [compteur, setCompteur]= useState(1);
  const [listefruit, stetlistefruit]= useState([
    {id: 1, nom: "Banane"},
    {id: 2, nom: "Mangoes"},
    {id: 3, nom: "Avocadoes"},
  ]);
//++++++++++++++++++++++++COMPORTEMENT ou Surtout les functions++++++++++++++++++++++
const handLeClick =()=>{
  alert("Veut tu modifier")
  setCompteur(compteur * 2)
}

const handLeDelete = (id) => {
  console.log(id);
  //1. On modifie directement un state, on doit prendre sa copie
  // Avec Slice: const listefruitCopy= listefruit.slice();
  //Avec Spread method: 
  const listefruitCopy = [...listefruit];
  //2. Manipuler la copi du state
  const fruitCopyUpdated = listefruitCopy.filter(fruit => fruit.id !==id);
  //3. Modifier le state
  stetlistefruit(listefruitCopy);
};
//**================= GESTION FORMULAIRE==================== */
const [nouvefruit, setnouveaufruit]= useState("");

//quand on n envoie l input affiche le donne passer dans usestate on n px changer ni ajouter
const handLeSubmit =(event) =>{
   event.preventDefault();
  // alert("handLeSubmit");
  //1. xxxxxxx Copier du state xxxxxx
  const copyfruit= listefruit.slice();
  //2. Manipulation dur la copy
  const id = new Date().getTime();
  const nom = nouvefruit;
  const fruitAajouter= { id,nom };
  copyfruit.push(fruitAajouter);
  //3. Modification
  setnouveaufruit(copyfruit);
};
//On declenche l'evenement 
const handleChage=(event)=>{
    //On ne change pas la valeur du state directemnt on passe par son seteur
  // const valueAfterChange=event.target.value;

  // console.log(valueAfterChange);
  setnouveaufruit(event.target.value);

};


//AFFICHAGE
  return (
    <div>
      <h2 class="num1">{compteur}</h2>
      <button class="btn1" onClick={handLeClick}>Incrementer</button>
      <div class="div2">
        <h2 class="titre2">Liste de  Fruits</h2>
        <ul>
          {listefruit.map((fruit) =>(
            <li key={fruit.id}>
              {fruit.nom} <button onClick={()=> handLeDelete(fruit.id)}>X</button>
              </li>
          ))}
        </ul>
        <div class="div2">       
        <form action="submit" onSubmit={handLeSubmit}>
          <input type="text" value={nouvefruit} onChange={handleChage} placeholder="Ajouter Fruit" />
          <p><button class="btn1">Ajouter +</button></p>         
        </form>
        </div>
      </div>
    </div>
  );
}

export default App;
//GESTION DU FORMULAIRE
//1.Creation du formulaire
//2.Soummission du formulaire
//3.Collecte donnes du formulaire 