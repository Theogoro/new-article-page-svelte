<script>
  // Components
  import Maintitle from "../components/Maintitle.svelte";
  import NewContainer from "../containers/NewContainer.svelte";
  import Image from "../components/Image.svelte";
  import Text from "../components/Text.svelte";
  import Author from "../components/Author.svelte";
  import Date from "../components/Date.svelte";
  import DescriptionList from "../components/DescriptionList.svelte";
  import DescriptionItem from "../components/DescriptionItem.svelte";
  // Images
  import TheoImage from "../images/Theo.png";
  //data-sources
  import maintitleData from "../data/maintitle.json";
  import imagesData from "../data/imagesData.json";
  import prosAndCons from "../data/prosAndCons.json";
</script>

<NewContainer class="body">
  <div class="NewContainer-item">
    <Maintitle {...maintitleData} />
  </div>
  <Image {...imagesData.problemMainImage} />
  <div class="NewContainer-item">
    <Author author="Theo Berta - 6to P" image={TheoImage}>
      <Date />
    </Author>
  </div>
  <div class="NewContainer-item">
    <Text id="Problem">
      <p>
        Con el reciente crecimiento del consumo en el sector de desarrollo de
        software, muchas empresas no se encuentran en la situación para poder
        satisfacer la demanda. La principal problemática es no se pueden
        utilizar las oficinas ni los herramientas e instrumentos que allí se
        encuentran a causa de la cuarentena
      </p>
      <br />
      <p>
        Algunas empresas están en proceso para adaptarse al
        <strong>teletrabajo</strong>
        , pero no consiguen llegar al nivel de productividad y calidad con el
        que venían trabajando. Para hablarnos de eso hoy contamos con una nota a
        <strong>Theo Berta</strong>
        , líder de
        <strong>Coders</strong>
        , quien expresó: ‘‘En base a lo expresado por los miembros de nuestra
        organizacion, creemos que lo mejor es orientar nuestro futuro hacia el
        <strong>teletrabajo</strong>
        ’’.
      </p>
    </Text>
  </div>
  <Image {...imagesData.officeImage} />
  <div class="NewContainer-item">
    <Text id="solution1">
      <p>
        Una de las primeras soluciones que se han propuesto es la de la
        implementación de las llamadas
        <strong>Safe office</strong>
        , las que consisten en adaptar las oficinas a las medidas de salud
        creando espacios individuales, limpiezas más frecuentes, evitar
        conglomerados en espacios cerrados, solo utilizar una parte de los
        empleados y dejar libre al resto de integrantes. Y en el caso de que
        algún miembro no acepte se lo tratara e intentará que pueda trabajar
        desde la comodidad de su hogar.
      </p>
    </Text>
  </div>
  <DescriptionList title="Ventajas safe office">
    {#each prosAndCons.saveOffice.pros as item, index}
      <DescriptionItem {...item} />
    {/each}
  </DescriptionList>
  <DescriptionList title="Desventajas safe office">
    {#each prosAndCons.saveOffice.cons as item, index}
      <DescriptionItem {...item} />
    {/each}
  </DescriptionList>
  <Image {...imagesData.homeOfficeImage} />
  <div class="NewContainer-item">
    <Text id="solution2">
      <p>
        Otra opción más aceptada es la de adaptar las casas de los empleados
        para que pueden hacer
        <strong>Home Working</strong>
        , que consiste en que la empresa proporciona de los equipos, sillas,
        escritorios, internet y monitores para poder ser igual de productivos
        como si estuvieran en la oficina. Además, comenzar a utilizar y explicar
        como usar herramientas como
        <a href="https://slack.com/intl/es-ar/">Slack</a>
        (Chat de equipo) o
        <a
          href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiRls6t-o7qAhUSK7kGHWK6DDQQFjAAegQIARAC&url=https%3A%2F%2Ftrello.com%2Fes&usg=AOvVaw3WmEzZYQBZuC_VANqNcQTo">
          Trello
        </a>
        (Gestor de tareas y flujos de trabajo) para facilitar la comunicación y
        el coworking.
      </p>
    </Text>
  </div>
  <DescriptionList title="Ventajas home working">
    {#each prosAndCons.homeworking.pros as item, index}
      <DescriptionItem {...item} />
    {/each}
  </DescriptionList>
  <DescriptionList title="Desventajas home working">
    {#each prosAndCons.homeworking.cons as item, index}
      <DescriptionItem {...item} />
    {/each}
  </DescriptionList>
  <Image {...imagesData.versusImage} />
  <div class="NewContainer-item">
    <Text id="vs">
      <p>
        Dentro de las ventajas del
        <strong>Safe Office</strong>
        encontramos que al estar en el entorno cotidiano de trabajo es más fácil
        adaptarse y no es tan fuerte el cambio, pero como principales
        desventajas se contempla un alto gasto en elementos de limpieza, trabajo
        a media maquina por la falta de empleados y posibilidad de contagios.
      </p>
      <br />
      <p>
        Mientras que con el
        <strong>Home Working</strong>
        , tenemos las ventajas de que todos lo empleados pueden trabajar y
        pueden adaptarse de manera más personal, en tanto a las desventajas hay
        un mayor costo para equipar a todos lo empleados y capacitarlos, pero al
        final tiende a ser mejor esta opción por el hecho de tener más
        individuos haciendo
        <strong>coworking</strong>
        .
      </p>
    </Text>
  </div>
</NewContainer>
