import React from "react";

function Questions() {
  return (
    <div>
      <div className="container my-2 py-6">
        <div className="row">
          <h1 className="display-6 my-4 fw-bolder text-center">Questions</h1>
          <div class="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              1.- ¿Cuáles son las ceremonias más importantes de un Sprint y cuál
              es la idea de cada una?
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={`1.-Sprint Planning: Tiene lugar al comienzo del Sprint, está diseñada para asegurar que cada miembro del equipo esté preparado.
2.-Daily Scrum: Reunión diaria, donde se comunica el progreso individual, no debe superar los 15 minutos.
3.- Sprint Review: Es una reunión dedicada a mostrar el trabajo del equipo terminado para su inspección y adaptación donde el product owner y el Develpment Team a todos los miembros del Sprint incluidos los stakeholders.
4.- Sprint Retrospective: Se realiza al final para que el equipo pueda mirar hacia atrás en su trabajo e identificar elementos que podrían mejorarse. Recolectar información, Generar ideas y Decidir qué hacer. De esta reunión, se proponen acciones que el equipo pueda implementar en el próximo Sprint.
5.- Sprint Grooming o Refinement:El refinamiento del Product Backlog es una práctica recomendada para asegurar que éste siempre esté preparado. 
             `}
            ></textarea>
            <label for="formGroupExampleInput" className="form-label">
              2.-¿Qué son los Wireframes? Nombra al menos una herramienta que
              podamos utilizar.
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={`Es una representación esquemática de cada una de las pantallas más significativas que van a componer un producto digital.
Herramientas para hacer Wireframes:Invision, MockFlow, Zeplin...
             `}
            ></textarea>
            <label for="formGroupExampleInput" className="form-label">
              3.- Explicar la diferencia entre var, let y const. Y dar un
              ejemplo en qué caso se utilizará.
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={`La declaración con var define una variable en el ámbito local actual (lease función) y se hereda a scopes descendientes por referencia. Si la variable es declarada fuera de una función, la variable será una variable global.
let y const son dos formas de declarar variables en JavaScript introducidas en ES6 que reducen el ámbito de la variable a bloques (con var el ámbito era la función actual) y no admiten hoisting. Además, las variables declaradas con const no pueden ser reasignadas (aunque no significa que su valor sea inmutable).
             `}
            ></textarea>
            <label for="formGroupExampleInput" className="form-label">
              4.-¿Cuáles son los tres comandos que se pueden utilizar para crear
              una nueva rama llamada rama-1?
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={`$git branch rama-1 Crea la rama.
$git checkout -b rama-1  Crea la rama y te posiciona ahí.
             `}
            ></textarea>
            <label for="formGroupExampleInput" className="form-label">
              5.- Explicar la diferencia entre git merge y git rebase.
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={`El rebase unifica las ramas perdiendo el historial de los commit y el merge deja el gráfico de las ramas.El rebase unifica sin necesidad de crear un nuevo commit .

             `}
            ></textarea>
            <label for="formGroupExampleInput" className="form-label">
              6.- ¿Cuál es la diferencia entre Pull Request (PR) y el comando
              git pull?
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={`Un pull request es una petición que el propietario de un fork de un repositorio hace al propietario del repositorio original para que este último incorpore los commits que están en el fork.
git pull hace dos cosas:
Actualiza la rama de trabajo actual (la rama a la que se ha cambiado actualmente)
Actualiza las referencias de rama remota para todas las demás ramas.
             `}
            ></textarea>
            <label for="formGroupExampleInput" className="form-label">
              7.- ¿Qué es el Virtual DOM?
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={`El Virtual DOM es una representación del DOM guardada en memoria, que actúa de intermediario entre los estados de la aplicación y los estados del DOM (vistos por el usuario). Cuando ocurre un cambio en la aplicación web, el virtual DOM interpreta dichos cambios y calcula la manera más eficiente de actualizar el DOM para que renderice la menor cantidad de cambios posibles.

             `}
            ></textarea>
            <label for="formGroupExampleInput" className="form-label">
              8.- Dado el siguiente codePen, el cual solo tiene un HTML, por
              medio de css llegar a esta respuesta. Imagen. (Para mostrar los
              servicios debes usar CSS Flexbox o CSS Grid).
            </label>
            <a href="https://codepen.io/natalia1705/pen/BawdOjY?editors=1100">
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
