/**
 * WAF Assessment Questions - Spanish Translation
 * Todas las preguntas y detalles traducidos al Español
 */

export const WAF_PILLARS_DATA = [
  {
    "id": "data-ai-governance",
    "name": "Gobernanza de Datos e IA",
    "description": "Asegure que los datos aporten valor y apoyen la estrategia empresarial mientras mantiene la calidad y el cumplimiento.",
    "questions": [
      {
        "id": "DG-01-01",
        "identifier": "DG-01-01",
        "principle": "Unificar la gestión de datos e IA",
        "title": "Establecer proceso de gobernanza de datos",
        "capabilities": null,
        "details": "La gobernanza de datos es la gestión de la disponibilidad, usabilidad, integridad y seguridad de los datos de una organización. Al fortalecer la gobernanza de datos, las organizaciones pueden garantizar la calidad de los datos críticos para análisis y toma de decisiones precisos, ayudando a identificar nuevas oportunidades, mejorar la satisfacción del cliente y, en última instancia, aumentar los ingresos. Ayuda a las organizaciones a cumplir con las regulaciones de privacidad de datos y mejorar las medidas de seguridad, reduciendo el riesgo de violaciones de datos y penalizaciones.\nLa gobernanza de datos efectiva también elimina redundancias y optimiza la gestión de datos, resultando en ahorro de costos y mayor eficiencia operativa.\nLos temas a cubrir con la gobernanza de datos incluyen:\n- Propiedad de los datos, roles y responsabilidades\n- Políticas y procedimientos para guiar la calidad, privacidad, seguridad y cumplimiento de los datos\n- Calidad de datos para garantizar precisión, completitud y confiabilidad\n- Seguridad y cumplimiento de datos\n- Arquitectura e integración de datos\n- Gestión de metadatos para asegurar que los datos sean bien comprendidos\nUnity Catalog está en el centro de la Plataforma de Inteligencia de Datos de Databricks y ayuda con muchos aspectos de la gobernanza de datos, desde gestión de metadatos, linaje hasta control de acceso.\nAWS | AZURE | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-01-02",
        "identifier": "DG-01-02",
        "principle": "Unificar la gestión de datos e IA",
        "title": "Gestionar metadatos de todos los activos de datos en un solo lugar",
        "capabilities": "Unity Catalog",
        "details": "Los beneficios de gestionar todos los metadatos en un solo lugar son similares a los beneficios de mantener una única fuente de verdad para todos sus datos. Esto incluye redundancia de datos reducida, mayor integridad de datos y evitar malentendidos basados en diferentes definiciones o taxonomías. También es más fácil implementar políticas, estándares y reglas globales cuando se trata con una sola fuente.\n\nComo mejor práctica, ejecute el lakehouse en una sola cuenta con un Unity Catalog. El contenedor de nivel superior de objetos en Unity Catalog es un metastore. Almacena activos de datos (como tablas y vistas) y los permisos que gobiernan el acceso a ellos. Use un solo metastore por región de nube y no acceda a metastores entre regiones para evitar problemas de latencia.\nAWS | Azure | GCP\n\nDatabricks recomienda usar catálogos para proporcionar segregación en toda la arquitectura de información de su organización. A menudo esto significa que los catálogos pueden corresponder al alcance del entorno de desarrollo de software, equipo o unidad de negocio.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-01-03",
        "identifier": "DG-01-03",
        "principle": "Unificar la gestión de datos e IA",
        "title": "Rastrear linaje de datos e IA para impulsar la visibilidad",
        "capabilities": "Unity Catalog",
        "details": "El linaje de datos es una herramienta poderosa que ayuda a los líderes de datos a impulsar mayor visibilidad y comprensión de los datos en sus organizaciones. Describe la transformación y refinamiento de datos desde la fuente hasta el insight. El linaje incluye la captura de todos los metadatos relevantes y eventos asociados con los datos en su ciclo de vida, incluyendo la fuente del conjunto de datos, qué otros conjuntos de datos se usaron para crearlo, quién lo creó y cuándo, qué transformaciones se realizaron, qué otros conjuntos de datos lo usan y muchos otros eventos y atributos. El linaje de datos se puede usar para muchos casos de uso relacionados con datos:\n\n- Cumplimiento y preparación para auditorías: El linaje de datos ayuda a las organizaciones a rastrear la fuente de tablas y campos. Esto es importante para cumplir con los requisitos de muchas regulaciones de cumplimiento, como GDPR, CCPA, HIPAA, BCBS 239 y SOX.\n\n- Análisis de impacto/gestión de cambios: Los datos pasan por múltiples transformaciones desde la fuente hasta la tabla final lista para el negocio. Comprender el impacto potencial de los cambios de datos en los usuarios downstream se vuelve importante desde la perspectiva de gestión de riesgos.\n\n- Aseguramiento de calidad de datos: Entender de dónde vino un conjunto de datos y qué transformaciones se aplicaron proporciona un contexto mucho mejor para científicos y analistas de datos.\n\n- Depuración y diagnósticos: En caso de un resultado inesperado, el linaje de datos ayuda a los equipos de datos a realizar análisis de causa raíz rastreando el error hasta su fuente.\n\nUnity Catalog captura linaje de datos en tiempo de ejecución a través de consultas ejecutadas en Databricks. El linaje es compatible con todos los lenguajes y se captura hasta el nivel de columna.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-01-04",
        "identifier": "DG-01-04",
        "principle": "Unificar la gestión de datos e IA",
        "title": "Agregar descripciones consistentes a sus metadatos",
        "capabilities": "Databricks IQ; Unity Catalog",
        "details": "Enriquecer metadatos con comentarios puede ayudar a acelerar procesos...\n\nLos comentarios generados por IA están destinados a proporcionar una descripción general de tablas y columnas basada en el esquema. Las descripciones están ajustadas para datos en un contexto empresarial, usando esquemas de ejemplo de varios conjuntos de datos abiertos en diversas industrias. El modelo fue evaluado con cientos de muestras simuladas para verificar que evita generar descripciones dañinas o inapropiadas.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-01-05",
        "identifier": "DG-01-05",
        "principle": "Unificar la gestión de datos e IA",
        "title": "Permitir descubrimiento fácil de datos para consumidores",
        "capabilities": "Unity Catalog",
        "details": "El descubrimiento fácil de datos permite que científicos de datos, analistas de datos e ingenieros de datos descubran y referencien rápidamente datos relevantes y aceleren el tiempo hacia el valor.\n\nDatabricks Catalog Explorer proporciona una interfaz para explorar y gestionar datos, esquemas (bases de datos), tablas y permisos, propietarios de datos, ubicaciones externas y credenciales. Además, puede usar la pestaña Insights en Catalog Explorer para ver las consultas y usuarios más frecuentes de cualquier tabla registrada en Unity Catalog.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-01-06",
        "identifier": "DG-01-06",
        "principle": "Unificar la gestión de datos e IA",
        "title": "Gobernar activos de IA junto con los datos",
        "capabilities": "Unity Catalog",
        "details": "Gobernar todos sus activos de IA es importante porque garantiza visibilidad y control unificados sobre datos y activos de IA, lo cual es crucial para mantener la calidad, seguridad y cumplimiento de los datos en diferentes plataformas y nubes. Esta gobernanza facilita la gestión de políticas de acceso de manera consistente y eficiente, mejorando la inteligencia operativa y asegurando que los sistemas de IA operen dentro de las directrices regulatorias y requisitos empresariales.\nCon Unity Catalog, las organizaciones pueden implementar un marco de gobernanza unificado para sus datos estructurados y no estructurados, modelos de machine learning, notebooks, features, funciones y archivos, mejorando la seguridad y el cumplimiento en nubes y plataformas.\nAWS | Azure | GCP\n\nLos alias de modelo en flujos de trabajo de machine learning permiten asignar una referencia nombrada y mutable a una versión específica de un modelo registrado. Esta funcionalidad es beneficiosa para rastrear y gestionar diferentes etapas del ciclo de vida de un modelo.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-02-01",
        "identifier": "DG-02-01",
        "principle": "Unificar seguridad de datos e IA",
        "title": "Centralizar control de acceso para todos los activos de datos e IA",
        "capabilities": "Unity Catalog",
        "details": "Centralizar el control de acceso para todos los activos de datos es importante porque simplifica la seguridad y gobernanza de sus activos de datos e IA proporcionando un lugar central para administrar y auditar el acceso a estos activos. Este enfoque ayuda a gestionar el acceso a objetos de datos e IA de manera más eficiente, asegurando que los requisitos operativos en torno a la segregación de funciones se cumplan, lo cual es crucial para el cumplimiento regulatorio y la mitigación de riesgos.\n\nDatabricks proporciona acceso a logs de auditoría de las actividades realizadas por los usuarios de Databricks, permitiendo que su empresa monitoree patrones detallados de uso de Databricks. Hay dos tipos de logs: logs de auditoría a nivel de workspace con eventos a nivel de workspace y logs de auditoría a nivel de cuenta con eventos a nivel de cuenta.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-02-02",
        "identifier": "DG-02-02",
        "principle": "Unificar seguridad de datos e IA",
        "title": "Configurar registro de auditoría",
        "capabilities": "Unity Catalog",
        "details": "El registro de auditoría es importante para proporcionar un relato detallado de las actividades del sistema (acciones del usuario, cambios en la configuración, etc.) que podrían impactar la integridad del sistema. Mientras que los logs de sistema estándar están diseñados para ayudar a los desarrolladores a solucionar errores, los logs de auditoría proporcionan un registro histórico de actividad para propósitos de cumplimiento y otras aplicaciones de políticas empresariales. Mantener logs de auditoría robustos puede ayudar a identificar y asegurar la preparación frente a amenazas, violaciones, fraude y otros problemas del sistema.\n\nDatabricks proporciona acceso a logs de auditoría de las actividades realizadas por los usuarios de Databricks, permitiendo que su empresa monitoree patrones detallados de uso. Hay dos tipos de logs: logs de auditoría a nivel de workspace y logs de auditoría a nivel de cuenta.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-02-03",
        "identifier": "DG-02-03",
        "principle": "Unificar seguridad de datos e IA",
        "title": "Auditar eventos de la plataforma de datos",
        "capabilities": "Unity Catalog",
        "details": "Auditar eventos de la plataforma de datos es importante porque (ver arriba)\n\nUnity Catalog captura un log de auditoría de las acciones realizadas contra el metastore. Esto permite a los administradores acceder a detalles granulares sobre quién accedió a un conjunto de datos dado y qué acciones realizaron.\nAWS | Azure | GCP\n\nPara compartir seguro con Delta Sharing, Databricks proporciona logs de auditoría para monitorear eventos de Delta Sharing, incluyendo:\n\n- Cuando alguien crea, modifica, actualiza o elimina un share o destinatario.\n- Cuando un destinatario accede a un enlace de activación y descarga la credencial.\n- Cuando un destinatario accede a shares o datos en tablas compartidas.\n- Cuando la credencial de un destinatario se rota o expira.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-03-01",
        "identifier": "DG-03-01",
        "principle": "Establecer estándares de calidad de datos",
        "title": "Definir y documentar estándares de calidad de datos",
        "capabilities": null,
        "details": "Definir estándares de calidad de datos claros y accionables es crucial, porque ayuda a garantizar que los datos usados para análisis, reportes y toma de decisiones sean confiables y dignos de confianza. Documentar estos estándares ayuda a asegurar que se mantengan.\n\nLos estándares de calidad de datos deben basarse en las necesidades específicas del negocio y deben abordar dimensiones de calidad de datos como precisión, completitud, consistencia, oportunidad y confiabilidad:\n- Precisión: Asegurar que los datos reflejen con precisión los valores del mundo real.\n- Completitud: Todos los datos necesarios deben ser capturados y ningún dato crítico debe faltar.\n- Consistencia: Los datos en todos los sistemas deben ser consistentes y no contradecir otros datos.\n- Oportunidad: Los datos deben ser actualizados y estar disponibles de manera oportuna.\n- Confiabilidad: Los datos deben ser obtenidos y procesados de una manera que asegure su confiabilidad.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-03-02",
        "identifier": "DG-03-02",
        "principle": "Establecer estándares de calidad de datos",
        "title": "Usar herramientas de calidad de datos para perfilar, limpiar, validar y monitorear datos",
        "capabilities": null,
        "details": "Aproveche herramientas de calidad de datos para perfilado, limpieza, validación y monitoreo de datos. Estas herramientas ayudan a automatizar los procesos de detección y corrección de problemas de calidad de datos, lo cual es vital para escalar iniciativas de calidad de datos en grandes conjuntos de datos típicos en data lakes.\n\nPara equipos que usan DLT, puede usar expectations para definir restricciones de calidad de datos en el contenido de un dataset. Las expectations permiten garantizar que los datos que llegan a las tablas cumplan con los requisitos de calidad de datos y proporcionan insights sobre la calidad de datos para cada actualización de pipeline.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-03-03",
        "identifier": "DG-03-03",
        "principle": "Establecer estándares de calidad de datos",
        "title": "Implementar y aplicar formatos y definiciones de datos estandarizados",
        "capabilities": null,
        "details": "Formatos y definiciones de datos estandarizados ayudan a lograr uniformidad en la representación de datos en todos los sistemas para facilitar la integración y análisis de datos, reducir costos y mejorar la toma de decisiones a través de la mejora de la comunicación y colaboración entre diferentes equipos y departamentos. También ayuda a proporcionar estructura para crear y mantener la calidad de los datos.\n\nDesarrolle y aplique un diccionario de datos estándar que incluya definiciones, formatos y valores aceptables para todos los elementos de datos usados en toda la organización.\n\nUse convenciones de nomenclatura consistentes, formatos de fecha y unidades de medida en todas las bases de datos y aplicaciones para evitar discrepancias y confusión.",
        "type": "status",
        "status": "open"
      }
    ]
  },
  {
    "id": "interoperability-usability",
    "name": "Interoperabilidad y Usabilidad",
    "description": "Permitir interacción fluida entre usuarios, sistemas y datos en toda la plataforma lakehouse.",
    "questions": [
      {
        "id": "IU-01-01",
        "identifier": "IU-01-01",
        "principle": "Definir estándares para integración",
        "title": "Usar patrones de integración reutilizables para integración externa",
        "capabilities": "Automatización",
        "details": "Los estándares de integración son importantes porque proporcionan directrices sobre cómo los datos deben ser representados, intercambiados y procesados entre diferentes sistemas y aplicaciones. Estos estándares ayudan a garantizar que los datos sean compatibles, de alta calidad e interoperables entre varias fuentes y destinos.\n\nEl Databricks Lakehouse viene con una API REST integral que permite gestionar prácticamente todos los aspectos de la plataforma de forma programática. El servidor de la API REST corre en el plano de control y proporciona un endpoint unificado para gestionar la plataforma Databricks.\n\nLa API REST proporciona el nivel más bajo de integración que siempre puede usarse. Sin embargo, la forma preferida de integrar con Databricks es usar abstracciones de nivel superior, como los SDKs de Databricks o herramientas CLI. Las herramientas CLI están basadas en shell y permiten integrar fácilmente la plataforma Databricks en workflows de CI/CD y MLOps.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-01-02",
        "identifier": "IU-01-02",
        "principle": "Definir estándares para integración",
        "title": "Usar conectores optimizados para ingerir fuentes de datos en el lakehouse",
        "capabilities": "Lakehouse Federation",
        "details": "Databricks proporciona conectores optimizados para servicios de mensajería como Apache Kafka para ingestión de datos en tiempo casi real.\nDatabricks proporciona integraciones integradas con muchos sistemas de datos nativos de la nube, además de soporte JDBC extensible para conectar con otros sistemas de datos.\n\nUna opción para integrar fuentes de datos sin ETL es Lakehouse Federation. Lakehouse Federation es la plataforma de federación de consultas de Databricks. El término federación de consultas describe un conjunto de características que permiten a usuarios y sistemas ejecutar consultas contra múltiples fuentes de datos sin tener que migrar todos los datos a un sistema unificado. Databricks usa Unity Catalog para gestionar la federación de consultas. Las herramientas de gobernanza de datos y linaje de datos de Unity Catalog garantizan que el acceso a los datos sea gestionado y auditado para todas las consultas federadas ejecutadas por usuarios en sus workspaces de Databricks.\n\nCualquier consulta en la plataforma Databricks que use una fuente de Lakehouse Federation será enviada a esa fuente. Asegúrese de que el sistema de origen pueda manejar la carga. También tenga en cuenta que si el sistema de origen está desplegado en una región de nube o nube diferente, habrá un costo de egress por cada consulta.\n\nConsidere descargar el acceso a bases de datos subyacentes mediante vistas materializadas para evitar cargas altas/concurrentes en bases de datos operacionales y reducir costos de egress.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-01-03",
        "identifier": "IU-01-03",
        "principle": "Definir estándares para integración",
        "title": "Usar herramientas de socios certificados",
        "capabilities": "Databricks Partner Connect",
        "details": "Usar herramientas de socios certificados facilita la conexión de datos entre dos sistemas. Estas integraciones permiten usar las soluciones de los socios manteniendo sus datos unificados en el Lakehouse.\n\nLas empresas tienen diferentes necesidades, y ninguna herramienta única puede satisfacer todas. Partner Connect le permite explorar e integrar fácilmente con nuestros socios, que cubren todos los aspectos del lakehouse: ingestión de datos, preparación y transformación, BI y visualización, machine learning, calidad de datos, y más. Partner Connect le permite crear cuentas de prueba con socios tecnológicos seleccionados de Databricks y conectar su workspace de Databricks a soluciones de socios desde la UI de Databricks. Pruebe soluciones de socios usando sus datos en el lakehouse de Databricks, y luego adopte las soluciones que mejor satisfagan las necesidades de su negocio.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-01-04",
        "identifier": "IU-01-04",
        "principle": "Definir estándares para integración",
        "title": "Reducir complejidad de pipelines de ingeniería de datos",
        "capabilities": "Delta Live Tables; Autoloader",
        "details": "Invertir en reducir la complejidad de los pipelines de ingeniería de datos permite escalabilidad, agilidad y flexibilidad para expandir e innovar más rápidamente. Los pipelines simplificados facilitan la gestión y adaptación de todas las necesidades operacionales de un pipeline de ingeniería de datos: orquestación de tareas, gestión de clusters, monitoreo, calidad de datos y manejo de errores.\n\nDelta Live Tables es un framework para construir pipelines de procesamiento de datos confiables, mantenibles y probables. Usted define las transformaciones a realizar en sus datos, y Delta Live Tables gestiona la orquestación de tareas, gestión de clusters, monitoreo, calidad de datos y manejo de errores.\n\nAuto Loader procesa archivos de datos nuevos de forma incremental y eficiente conforme llegan al almacenamiento en nube. Puede leer archivos de datos del almacenamiento en nube de forma confiable. Un aspecto esencial tanto de Delta Live Tables como de Auto Loader es su naturaleza declarativa: Sin ellos, es necesario construir pipelines complejos que integren diferentes servicios de nube - como un servicio de notificación y un servicio de colas - para leer archivos de nube de forma confiable basándose en eventos y permitir la combinación de fuentes batch y streaming de forma confiable.\n\nAuto Loader y Delta Live Tables reducen las dependencias del sistema y la complejidad, mejorando significativamente la interoperabilidad con el almacenamiento en nube y entre diferentes paradigmas como batch y streaming.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-02-01",
        "identifier": "IU-02-01",
        "principle": "Utilizar interfaces y formatos de datos abiertos",
        "title": "Usar formatos de datos abiertos",
        "capabilities": "Delta Lake",
        "details": "Usar un formato de datos abierto significa que no hay restricciones en su uso. Esto es importante porque elimina barreras para acceder y usar los datos para análisis y generar insights de negocio. Los formatos abiertos, como los construidos sobre Apache Spark, también agregan características que mejoran el rendimiento con soporte para transacciones ACID, streaming unificado y procesamiento de datos en batch. Además, el código abierto es impulsado por la comunidad, lo que significa que la comunidad está constantemente trabajando en mejorar características existentes y agregar nuevas, facilitando a los usuarios obtener el máximo de sus proyectos.\n\nEl framework Delta Lake tiene muchas ventajas, desde características de confiabilidad hasta mejoras de alto rendimiento, y también es un formato de datos completamente abierto. Además, Delta Lake viene con una biblioteca Delta Standalone, que abre el formato Delta para proyectos de desarrollo. Es una biblioteca Java de nodo único que puede leer y escribir en tablas Delta. Docenas de herramientas y aplicaciones de terceros soportan Delta Lake.\n\nUniForm aprovecha el hecho de que tanto Delta Lake como Iceberg consisten en archivos de datos Parquet y una capa de metadatos. UniForm genera automáticamente metadatos Iceberg de forma asíncrona, permitiendo que los clientes Iceberg lean tablas Delta como si fueran tablas Iceberg.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-02-02",
        "identifier": "IU-02-02",
        "principle": "Utilizar interfaces y formatos de datos abiertos",
        "title": "Habilitar compartición segura de datos para todos los activos",
        "capabilities": "Delta Sharing",
        "details": "Compartir datos puede llevar a mejor colaboración y toma de decisiones. Sin embargo, al compartir datos, es importante mantener control sobre el uso de los datos, garantizar confidencialidad y establecer directrices para la recolección, almacenamiento, procesamiento y compartición de datos - para proteger sus datos y garantizar cumplimiento con leyes y regulaciones relevantes sobre compartición de datos.\n\nDelta Sharing proporciona una solución abierta para compartir datos en vivo de su lakehouse de forma segura a cualquier plataforma de computación. Los destinatarios no necesitan estar en la plataforma Databricks, en la misma nube, o en cualquier nube. Delta Sharing está nativamente integrado con Unity Catalog, permitiendo que las organizaciones gestionen y auditen centralmente los datos compartidos en toda la empresa y compartan activos de datos con confianza mientras cumplen con los requisitos de seguridad y cumplimiento.\n\nLos proveedores de datos pueden compartir datos en vivo desde donde residen en su almacenamiento en nube sin replicar o mover a otro sistema. Este enfoque reduce los costos operacionales de compartición de datos porque los proveedores de datos no necesitan replicar datos múltiples veces entre nubes, geografías o plataformas de datos para cada uno de sus consumidores de datos.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-02-03",
        "identifier": "IU-02-03",
        "principle": "Utilizar interfaces y formatos de datos abiertos",
        "title": "Usar estándares abiertos para flujos de trabajo de IA",
        "capabilities": "MLFlow",
        "details": "Al igual que usar un formato de datos de código abierto, usar estándares abiertos para sus flujos de trabajo de IA tiene beneficios similares de flexibilidad, agilidad, costo y seguridad.\n\nMLflow es una plataforma de código abierto para gestionar el ciclo de vida de ML, incluyendo experimentación, reproducibilidad, despliegue y un registro central de modelos. Usar MLflow en Databricks proporciona ambas ventajas: Puede escribir su flujo de trabajo de ML usando una herramienta abierta y portable y usar servicios confiables operados por Databricks (Tracking Server, Model Registry). También agrega serving de modelos empresarial y escalable, permitiendo hospedar modelos MLflow como endpoints REST.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-03-01",
        "identifier": "IU-03-01",
        "principle": "Simplificar implementación de nuevos casos de uso",
        "title": "Proporcionar experiencia de autoservicio en toda la plataforma",
        "capabilities": "Databricks Data Intelligence Platform",
        "details": "Hay varios beneficios de una plataforma donde los usuarios tienen autonomía para usar las herramientas y capacidades según sus necesidades. Invertir en crear una plataforma de autoservicio facilita la escalabilidad para atender a más usuarios e impulsa mayor eficiencia minimizando la necesidad de involucramiento humano para aprovisionar usuarios, resolver problemas y procesar solicitudes de acceso.\n\nLa Databricks Data Intelligence Platform tiene todas las capacidades requeridas para proporcionar una experiencia de autoservicio. Aunque puede haber un paso de aprobación obligatorio, la mejor práctica es automatizar completamente la configuración cuando una unidad de negocio solicita acceso al lakehouse. Aprovisione automáticamente su nuevo entorno, sincronice usuarios y use SSO para autenticación, proporcione control de acceso a datos comunes y almacenamientos de objetos separados para sus propios datos, y así sucesivamente. Junto con un catálogo de datos central que contiene conjuntos de datos semánticamente consistentes y listos para negocios, esto proporciona acceso rápido y seguro para nuevas unidades de negocio a las capacidades del Lakehouse y a los datos que necesitan.\n\nBlog",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-03-02",
        "identifier": "IU-03-02",
        "principle": "Simplificar implementación de nuevos casos de uso",
        "title": "Usar servicios serverless",
        "capabilities": "Databricks Serverless SQL;\nServerless Workflows;\nServerless Notebooks",
        "details": "Usar serverless tiene múltiples beneficios más allá de solo ahorros de costos, escalabilidad y rendimiento. El desarrollo es más rápido cuando los desarrolladores pueden enfocarse en el código en lugar de la infraestructura. También tienen mayor flexibilidad en cómo diseñan sus aplicaciones.\n\nPara cómputo serverless en la plataforma Databricks, la capa de cómputo corre en la cuenta de Databricks del cliente. Los administradores de nube ya no tienen que gestionar entornos de nube complejos que involucran ajustar cuotas, crear y mantener activos de red y unir fuentes de facturación. Los usuarios se benefician de tiempos de espera casi nulos para el inicio de clusters y mejor concurrencia en sus consultas.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-03-03",
        "identifier": "IU-03-03",
        "principle": "Simplificar implementación de nuevos casos de uso",
        "title": "Usar plantillas de cómputo predefinidas",
        "capabilities": "Databricks Cluster Policies",
        "details": "Las plantillas de cómputo predefinidas pueden ayudar a traer algunos de los beneficios de serverless cuando no está disponible para una herramienta particular o en su región. Principalmente, estas plantillas eliminan la necesidad de que los desarrolladores aprovisionen su propio cómputo y determinen las necesidades de infraestructura, acelerando así el tiempo de desarrollo.\n\nElimine la carga de definir un cluster (tipo de VM, tamaño de nodo y tamaño de cluster) de los usuarios finales. Esto puede lograrse de las siguientes maneras:\n\n- Proporcione clusters compartidos como entornos inmediatos para usuarios. En estos clusters, use auto scaling hasta un mínimo muy bajo de nodos para evitar altos costos de inactividad.\n\n- Use políticas de cluster para definir clusters de tamaño estándar (P, M, G) para proyectos como un entorno de trabajo estandarizado.\n\nBlog\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-03-04",
        "identifier": "IU-03-04",
        "principle": "Simplificar implementación de nuevos casos de uso",
        "title": "Usar capacidades de IA para aumentar productividad",
        "capabilities": "Databricks Assistant",
        "details": "Además de aumentar la productividad, las herramientas de IA también pueden ayudar a identificar patrones en errores y proporcionar insights adicionales basados en la entrada. En general, incorporar estas herramientas en el proceso de desarrollo puede reducir significativamente los errores y facilitar la toma de decisiones - llevando a un tiempo más rápido para el lanzamiento.\n\nDatabricks Assistant le permite consultar datos a través de una interfaz conversacional, haciéndolo más productivo dentro de Databricks. Describa su tarea en lenguaje natural y deje que el Assistant genere consultas SQL, explique código complejo y corrija errores automáticamente. El Assistant aprovecha los metadatos de Unity Catalog para entender sus tablas, columnas, descripciones y activos de datos populares en su empresa para proporcionar respuestas personalizadas para usted.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-04-01",
        "identifier": "IU-04-01",
        "principle": "Asegurar consistencia y usabilidad de datos",
        "title": "Ofrecer datos como productos reutilizables confiables",
        "capabilities": null,
        "details": "Datos como productos es una estrategia de datos que puede ayudar a las organizaciones a aprovechar todo el potencial de sus activos de datos. Transforma datos crudos en un producto estructurado, accesible y valioso.\n\nProducir datos como producto de alta calidad es un objetivo primario de cualquier plataforma de datos. La idea es que los equipos de ingeniería de datos apliquen pensamiento de producto a los datos curados: Los activos de datos son sus productos, y los científicos de datos, ingenieros de ML y BI, o cualquier otro equipo de negocio que consume datos son sus clientes. Estos clientes deben poder descubrir, acceder y crear valor a partir de estos datos como productos a través de una experiencia de autoservicio sin la intervención de los equipos de datos especializados.\n\neBook",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-04-02",
        "identifier": "IU-04-02",
        "principle": "Asegurar consistencia y usabilidad de datos",
        "title": "Publicar productos de datos semánticamente consistentes",
        "capabilities": null,
        "details": "Un data lake generalmente contiene datos de diferentes sistemas de origen. Estos sistemas a veces nombran el mismo concepto de forma diferente (como cliente vs. cuenta) o significan conceptos diferentes por el mismo identificador. Para que los usuarios de negocio combinen fácilmente estos conjuntos de datos de manera significativa, los datos deben hacerse homogéneos entre todas las fuentes para ser semánticamente consistentes. Además, para que algunos datos sean valiosos para análisis, las reglas de negocio internas deben aplicarse correctamente, como el reconocimiento de ingresos. Para asegurar que todos los usuarios estén usando los datos correctamente interpretados, los conjuntos de datos con estas reglas deben hacerse disponibles y publicarse en Unity Catalog. El acceso a los datos de origen debe limitarse a los equipos que entienden el uso correcto.\n\neBook",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-04-03",
        "identifier": "IU-04-03",
        "principle": "Asegurar consistencia y usabilidad de datos",
        "title": "Proporcionar catálogo central para descubrimiento y linaje",
        "capabilities": "Unity Catalog",
        "details": "Un catálogo central para descubrimiento y linaje ayuda a los consumidores de datos a acceder a datos de múltiples fuentes en toda la empresa, reduciendo así la sobrecarga operacional para el equipo central de gobernanza.\n\nEn Unity Catalog, los administradores y responsables de datos gestionan usuarios y su acceso a datos centralmente en todos los workspaces en una cuenta de Databricks. Los usuarios en diferentes workspaces pueden compartir los mismos datos y, dependiendo de los privilegios de usuario otorgados centralmente en Unity Catalog, pueden acceder a datos juntos.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      }
    ]
  },
  {
    "id": "operational-excellence",
    "name": "Excelencia Operacional",
    "description": "Mantener sistemas de producción eficientemente con monitoreo adecuado, automatización y mejores prácticas.",
    "questions": [
      {
        "id": "OE-01-01",
        "identifier": "OE-01-01",
        "principle": "Optimizar procesos de construcción y lanzamiento",
        "title": "Establecer equipo de operaciones de plataforma",
        "capabilities": null,
        "details": "Es una mejor práctica general tener un equipo de operaciones de plataforma para permitir que los equipos de datos trabajen en una o más plataformas de datos. Este equipo es responsable de crear blueprints y mejores prácticas internamente. Proporcionan herramientas - por ejemplo, para automatización de infraestructura y acceso de autoservicio - y aseguran que se cumplan las necesidades de seguridad y cumplimiento. De esta manera, la responsabilidad de proteger los datos de la plataforma está en un equipo central, para que los equipos distribuidos puedan concentrarse en trabajar con datos y producir nuevos insights.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-01-02",
        "identifier": "OE-01-02",
        "principle": "Optimizar procesos de construcción y lanzamiento",
        "title": "Usar control de código fuente",
        "capabilities": "Databricks Git Folders",
        "details": "La gestión de código fuente (SCM) ayuda a los desarrolladores a trabajar de manera más efectiva, lo que puede llevar a una velocidad de lanzamiento más rápida y costos de desarrollo más bajos. Tener una herramienta que ayude a rastrear cambios, mantener la integridad del código, detectar bugs y revertir a versiones anteriores si es necesario es un componente importante de su arquitectura de solución general.\n\nLas Git folders de Databricks permiten a los usuarios almacenar notebooks u otros archivos en un repositorio Git, proporcionando características como clonación de repositorio, commit y push, pull, gestión de ramas y visualización de diffs de archivos. Use Git folders para mejor visibilidad y seguimiento de código.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-01-03",
        "identifier": "OE-01-03",
        "principle": "Optimizar procesos de construcción y lanzamiento",
        "title": "Implementar pipelines CI/CD",
        "capabilities": "Databricks Git Folders",
        "details": "Integración continua y entrega continua (CI/CD) se refieren al desarrollo y entrega de software en ciclos cortos y frecuentes usando pipelines de automatización. Aunque este no es un proceso nuevo, habiendo sido omnipresente en la ingeniería de software tradicional durante décadas, se está convirtiendo en un proceso cada vez más necesario para equipos de ingeniería de datos y ciencia de datos. Para que los productos de datos sean valiosos, deben ser entregados de manera oportuna. Además, los consumidores deben tener confianza en la validez de los resultados dentro de estos productos. Al automatizar la construcción, prueba e implementación de código, los equipos de desarrollo pueden entregar lanzamientos con más frecuencia y confiabilidad que los procesos manuales aún prevalentes en muchos equipos de ingeniería de datos y ciencia de datos.\n\nPara más información sobre mejores prácticas para desarrollo de código usando Databricks Git folders, consulte técnicas de CI/CD con Git y Databricks Git folders (Repos). Esto, junto con la API REST de Databricks, le permite construir procesos de implementación automatizados con GitHub Actions, pipelines de Azure DevOps o jobs de Jenkins.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-01-04",
        "identifier": "OE-01-04",
        "principle": "Optimizar procesos de construcción y lanzamiento",
        "title": "Estandarizar procesos MLOps",
        "capabilities": "MLFlow",
        "details": "Los procesos de MLOps proporcionan reproducibilidad de pipelines de ML, permitiendo colaboración más estrecha entre equipos de datos, reduciendo conflictos con devops y TI, y acelerando la velocidad de lanzamiento. Como muchos modelos se usan para orientar decisiones de negocio importantes, estandarizar procesos de MLOps asegura que los modelos se desarrollen, prueben e implementen de manera consistente y confiable.\n\nConstruir e implementar modelos de ML es complejo. Hay muchas opciones disponibles para lograr esto, pero pocas son estándares bien definidos. Como resultado, en los últimos años, hemos visto el surgimiento de operaciones de machine learning (MLOps). MLOps es un conjunto de procesos y automatización para gestionar modelos, datos y código para mejorar la estabilidad de rendimiento y eficiencia a largo plazo en sistemas de ML. Abarca preparación de datos, análisis exploratorio de datos (EDA), ingeniería de features, entrenamiento de modelos, validación de modelos, implementación y monitoreo.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-01-05",
        "identifier": "OE-01-05",
        "principle": "Optimizar procesos de construcción y lanzamiento",
        "title": "Organizar espacios de trabajo",
        "capabilities": "Databricks Workspaces",
        "details": "Organizar workspaces en Databricks ofrece varios beneficios que mejoran la eficiencia y seguridad de las operaciones de datos dentro de una empresa. Las principales ventajas incluyen:\n\n1. Entorno Estructurado: Implementar entornos estructurados como workspaces de desarrollo, staging y producción ayuda a optimizar procesos y mantener la consistencia en diferentes etapas de desarrollo de proyectos\n\n2. Aislamiento y Seguridad: Los workspaces pueden ser aislados por línea de negocio o producto de datos, lo que no solo mejora la gobernanza al dividir claramente usuarios y roles sino que también aumenta la seguridad al restringir el acceso basado en necesidades de negocio específicas o características de datos\n\n3. Flexibilidad y Colaboración: El aislamiento basado en productos de datos permite más flexibilidad y oportunidades colaborativas dentro de entornos de desarrollo compartidos y workspaces sandbox\n\n4. Recuperación de Desastres: Los workspaces organizados facilitan la implementación de planes de recuperación de desastres y respaldos regionales\n\n5. Gobernanza y Cumplimiento: La gobernanza centralizada a través de un Centro de Excelencia (COE) y el uso de las características de gobernanza de Databricks ayudan a minimizar riesgos y asegurar el cumplimiento con requisitos regulatorios\n\n6. Automatización y Eficiencia: Automatizar procesos de nube, incluyendo gestión de infraestructura, CI/CD, respaldo y monitoreo, reduce la sobrecarga manual y aumenta la eficiencia operativa",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-01-06",
        "identifier": "OE-01-06",
        "principle": "Optimizar procesos de construcción y lanzamiento",
        "title": "Gestionar modelos externos vía AI Gateway",
        "capabilities": null,
        "details": "Los modelos externos son modelos de terceros alojados fuera de Databricks. Soportados por Model Serving AI Gateway, los modelos externos de Databricks vía AI Gateway le permiten optimizar el uso y gestión de varios proveedores de LLM (Large Language Model), como OpenAI y Anthropic, dentro de una organización. También puede usar Mosaic AI Model Serving como proveedor para servir modelos de ML predictivos, que ofrece límites de tasa para esos endpoints. Como parte de este soporte, Model Serving ofrece una interfaz de alto nivel que simplifica la interacción con estos servicios proporcionando un endpoint unificado para manejar solicitudes específicas relacionadas con LLM. Además, el soporte de Databricks para modelos externos proporciona gestión centralizada de credenciales. Al almacenar claves API en un lugar seguro, las organizaciones pueden mejorar su postura de seguridad minimizando la exposición de claves API sensibles en todo el sistema.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-01-07",
        "identifier": "OE-01-07",
        "principle": "Optimizar procesos de construcción y lanzamiento",
        "title": "Definir estrategia de catálogo para su empresa usando Unity Catalog",
        "capabilities": "Unity Catalog",
        "details": "Una estrategia de catálogo bien definida es esencial para organizar y gobernar activos de datos en toda su empresa. Unity Catalog proporciona una solución de gobernanza unificada que le permite gestionar el acceso a datos, modelos de IA y otros activos en múltiples workspaces y plataformas de nube.\n\nConsideraciones clave para su estrategia de catálogo incluyen:\n- Convenciones de nomenclatura de catálogo alineadas con unidades de negocio, entornos o dominios de datos\n- Organización de schemas que refleje su arquitectura de datos (capas bronze, silver, gold)\n- Políticas de control de acceso usando permisos granulares de Unity Catalog\n- Clasificación y etiquetado de datos para cumplimiento y descubrimiento\n- Compartición de datos entre workspaces usando el metastore centralizado de Unity Catalog\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-01-08",
        "identifier": "OE-01-08",
        "principle": "Optimizar procesos de construcción y lanzamiento",
        "title": "Usar AI Playground para probar y comparar modelos",
        "capabilities": "Databricks LLM Playground",
        "details": "Nuevas herramientas visuales sin código permiten a los usuarios comparar la salida de modelos basada en prompts definidos, que son automáticamente rastreados en MLflow. Con integración a Mosaic AI Model Serving, los clientes pueden implementar el mejor modelo en producción. El AI Playground es un entorno similar a chat donde puede probar, hacer prompts y comparar LLMs.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-01-09",
        "identifier": "OE-01-09",
        "principle": "Optimizar procesos de construcción y lanzamiento",
        "title": "Preparar datos para entrenamiento de modelos de IA",
        "capabilities": null,
        "details": "Aprovechar datos internos y propiedad intelectual para personalizar grandes modelos de IA puede ofrecer una ventaja competitiva significativa. Sin embargo, este proceso puede ser complejo, involucrando coordinación en varias partes de la organización. La Plataforma de Inteligencia de Datos aborda este desafío integrando datos de departamentos y sistemas tradicionalmente aislados. Esta integración facilita una estrategia de datos e IA más cohesiva, permitiendo el entrenamiento, prueba y evaluación efectivos de modelos usando un conjunto de datos completo. Tenga cuidado al preparar datos para entrenamiento de modelos tradicionales y GenAI para asegurar que no esté incluyendo involuntariamente datos que causen conflictos legales, como violaciones de derechos de autor, violaciones de privacidad o violaciones de HIPAA.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-01",
        "identifier": "OE-02-01",
        "principle": "Automatizar despliegues y cargas de trabajo",
        "title": "Usar infraestructura como código",
        "capabilities": "Databricks Terraform Provider",
        "details": "Infraestructura como Código permite a desarrolladores y equipos de operaciones gestionar, monitorear y aprovisionar recursos automáticamente, en lugar de configurar manualmente dispositivos de hardware, sistemas operativos, aplicaciones y servicios.\n\nHashiCorp Terraform es una herramienta de código abierto popular para crear infraestructura de nube segura y predecible en varios proveedores de nube. El proveedor Terraform de Databricks gestiona workspaces de Databricks y la infraestructura de nube asociada usando una herramienta flexible y poderosa. El objetivo del proveedor Terraform de Databricks es soportar todas las APIs REST de Databricks, apoyando la automatización de los aspectos más complicados de implementar y gestionar sus plataformas de datos. El proveedor Terraform de Databricks es la herramienta recomendada para implementar y gestionar clusters y jobs de manera confiable, aprovisionar workspaces de Databricks y configurar el acceso a datos.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-02",
        "identifier": "OE-02-02",
        "principle": "Automatizar despliegues y cargas de trabajo",
        "title": "Usar plantillas de cómputo predefinidas",
        "capabilities": "Compute Policies",
        "details": "Las plantillas de cómputo predefinidas pueden ayudar a traer algunos de los beneficios del serverless cuando no está disponible. Principalmente, estas plantillas eliminan la necesidad de que los desarrolladores aprovisionen su propio cómputo y determinen las necesidades de infraestructura, acelerando así el tiempo de desarrollo.\n\nUse políticas de cluster para definir clusters dimensionados por tamaño (S, M, L) para proyectos como un entorno de trabajo estandarizado.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-03",
        "identifier": "OE-02-03",
        "principle": "Automatizar despliegues y cargas de trabajo",
        "title": "Configurar flujos de trabajo automatizados",
        "capabilities": "Databricks Workflows",
        "details": "Configurar flujos de trabajo automatizados para jobs puede ayudar a reducir tareas manuales innecesarias y mejorar la productividad a través del proceso DevOps de crear e implementar jobs.\n\nRecomendamos usar workflows con jobs para programar tareas de procesamiento de datos y análisis de datos en clusters de Databricks con recursos escalables. Los jobs pueden consistir en una sola tarea o un gran flujo de trabajo multitarea con dependencias complejas. Databricks gestiona orquestación de tareas, gestión de cluster, monitoreo y reportes de errores para todos sus jobs. Puede ejecutar sus jobs inmediatamente o periódicamente a través de un sistema de programación fácil de usar. Puede implementar tareas de job usando notebooks, JARs, pipelines de Delta Live Tables o aplicaciones Python, Scala, Spark submit y Java.\nAWS | Azure | GCP\n\nLa API REST completa de Databricks es usada por orquestadores externos para orquestar activos, notebooks y jobs de Databricks.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-04",
        "identifier": "OE-02-04",
        "principle": "Automatizar despliegues y cargas de trabajo",
        "title": "Usar ingestión de archivos basada en eventos",
        "capabilities": "Autoloader",
        "details": "La ingestión de archivos basada en eventos (vs. basada en programación) tiene varios beneficios, incluyendo eficiencia, mayor frescura de datos e ingestión de datos en tiempo real. Ejecutar un job solo cuando ocurre un evento asegura que no está desperdiciando recursos, ahorrando costos. Las arquitecturas basadas en eventos también pueden incorporar medidas de seguridad como control de acceso basado en roles y registro de auditoría, mejorando así la postura general de seguridad y protegiendo datos.\n\nAuto Loader procesa de manera incremental y eficiente nuevos archivos de datos a medida que llegan al almacenamiento en nube. Puede ingerir muchos formatos de archivo como JSON, CSV, PARQUET, AVRO, ORC, TEXT y BINARYFILE. Con una carpeta de entrada en el almacenamiento en nube, Auto Loader procesa automáticamente nuevos archivos a medida que llegan.\nPara ingestiones únicas, considere usar el comando COPY INTO en su lugar.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-05",
        "identifier": "OE-02-05",
        "principle": "Automatizar despliegues y cargas de trabajo",
        "title": "Usar frameworks de ETL declarativos",
        "capabilities": "Delta Live Tables",
        "details": "Usar frameworks de ETL ayuda a mejorar la calidad de los datos, ahorra tiempo y facilita el análisis de conjuntos de datos más grandes. También ayudan a eliminar errores de datos, cuellos de botella y latencia.\n\nDelta Live Tables es un framework declarativo para construir pipelines de procesamiento de datos confiables, mantenibles y testeables. Usted define las transformaciones a realizar en sus datos y Delta Live Tables gestiona orquestación de tareas, gestión de cluster, monitoreo, calidad de datos y manejo de errores.\n\nCon Delta Live Tables, defina fácilmente pipelines de datos de extremo a extremo en SQL o Python: Especifique la fuente de datos, la lógica de transformación y el estado de destino de los datos. Delta Live Tables mantiene dependencias y determina automáticamente la infraestructura para ejecutar el job.\n\nPara gestionar la calidad de los datos, Delta Live Tables monitorea tendencias de calidad de datos a lo largo del tiempo, evitando que datos malos fluyan a las tablas a través de validación y verificaciones de integridad con políticas de error predefinidas.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-06",
        "identifier": "OE-02-06",
        "principle": "Automatizar despliegues y cargas de trabajo",
        "title": "Desplegar modelos como código",
        "capabilities": "MLFlow",
        "details": "Desplegar modelos como código es adoptar un enfoque DevOps para machine learning. Este enfoque tiene varios beneficios. Los modelos son versionados junto con otro código, los lanzamientos se implementan como una unidad y las implementaciones son reproducibles (el fallback es posible).\n\nEl enfoque de desplegar código para implementación de modelo implica desarrollar y probar código de entrenamiento y código auxiliar en un entorno de entrenamiento, seguido por la promoción a un entorno de staging para pruebas adicionales en un subconjunto de datos. Una vez validado, el código se promueve a un entorno de producción para entrenamiento y pruebas finales en el conjunto de datos completo. El modelo y los pipelines auxiliares se implementan entonces.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-07",
        "identifier": "OE-02-07",
        "principle": "Automatizar despliegues y cargas de trabajo",
        "title": "Gestionar ciclos de vida de modelos ML",
        "capabilities": "Unity Catalog",
        "details": "Como los ciclos de vida de los modelos no corresponden uno a uno con los ciclos de vida del código, tiene sentido que la gestión de modelos tenga su propio servicio.\n\nUnity Catalog en Databricks ofrece una solución completa para gestionar el ciclo de vida de modelos de machine learning (ML), proporcionando características como control de acceso centralizado, versionado, implementación y monitoreo. Al habilitar Unity Catalog en su workspace, puede entrenar, registrar y gestionar diferentes versiones de modelos de ML usando APIs de MLflow, con soporte para aliases para facilitar la promoción y rollback de modelos.\n\nEl catálogo asegura gobernanza robusta con permisos a nivel de cuenta e integra perfectamente con otras herramientas y sistemas. También soporta serving de modelos a escala y proporciona linaje detallado y monitoreo de rendimiento en tiempo real, asegurando que los modelos permanezcan efectivos y en cumplimiento a lo largo de su ciclo de vida.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-08",
        "identifier": "OE-02-08",
        "principle": "Automatizar despliegues y cargas de trabajo",
        "title": "Automatizar seguimiento de experimentos ML",
        "capabilities": "MLFlow",
        "details": "Rastrear experimentos de ML es el proceso de guardar metadatos relevantes para cada experimento y organizar los experimentos. Estos metadatos incluyen entradas/salidas del experimento, parámetros, modelos y otros artefactos. El objetivo del seguimiento de experimentos es crear resultados reproducibles en todas las etapas del proceso de desarrollo de modelos de ML. Automatizar este proceso facilita el escalado del número de experimentos y asegura consistencia en los metadatos capturados en todos los experimentos.\n\nDatabricks Autologging es una solución sin código que extiende el registro automático de MLflow para entregar seguimiento automático de experimentos para sesiones de entrenamiento de machine learning en Databricks. Databricks Auto Logging captura automáticamente parámetros de modelo, métricas, archivos e información de linaje cuando entrena modelos con ejecuciones de entrenamiento registradas como ejecuciones de seguimiento de MLflow.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-09",
        "identifier": "OE-02-09",
        "principle": "Automatizar despliegues y cargas de trabajo",
        "title": "Automatizar pipelines ML",
        "capabilities": "Databricks Terraform provider",
        "details": "Los datos usados para pipelines de ML vienen de las mismas fuentes que los datos usados para otros pipelines de datos. Además, los pipelines de ML y datos son similares en que ambos deben ser monitoreados regularmente e involucran preparación de datos para análisis por usuarios de negocio o entrenamiento de modelos. Ambos también necesitan ser escalables y seguros. En ambos casos, la infraestructura usada debe soportar estas actividades.\n\nLos pipelines de ML deben ser automatizados usando muchas de las mismas técnicas que otros pipelines de datos. Use el proveedor Terraform de Databricks para automatizar la implementación. ML requiere implementar infraestructura como jobs de inferencia, endpoints de serving y jobs de featurización. Todos los pipelines de ML pueden ser automatizados como Workflows con Jobs, y muchos pipelines de ML centrados en datos pueden usar el Auto Loader más especializado para ingerir imágenes y otros datos y Delta Live Tables para computar features o monitorear métricas.\n\nDocs Terraform",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-10",
        "identifier": "OE-02-10",
        "principle": "Automatizar despliegues y cargas de trabajo",
        "title": "Usar frameworks declarativos para MLOps",
        "capabilities": "Databricks Asset Bundles",
        "details": "Los frameworks declarativos dentro de MLOps permiten a los equipos definir resultados deseados en términos de alto nivel, dejando que el sistema maneje los detalles de ejecución, simplificando así la implementación y escalado de modelos de ML. Estos frameworks soportan integración y entrega continuas, automatizan pruebas y gestión de infraestructura, y aseguran gobernanza y cumplimiento de modelos, acelerando el tiempo de lanzamiento al mercado y aumentando la productividad en todo el ciclo de vida de ML.\n\nDatabricks Asset Bundles (DABs) son una nueva herramienta para optimizar el desarrollo de proyectos complejos de datos, analytics y ML para la plataforma Databricks. Los Bundles facilitan la gestión de proyectos complejos durante el desarrollo activo proporcionando capacidades de CI/CD en su flujo de trabajo de desarrollo de software con una sintaxis YAML concisa y declarativa única. Al usar bundles para automatizar las pruebas, implementaciones y gestión de configuración de su proyecto, puede reducir errores mientras promueve las mejores prácticas de software en toda su organización como proyectos modelados.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-11",
        "identifier": "OE-02-11",
        "principle": "Automatizar despliegues y cargas de trabajo",
        "title": "Automatizar evaluación de LLM",
        "capabilities": null,
        "details": "La característica 'LLM-as-a-judge' en MLflow 2.8 automatiza la evaluación de LLM, ofreciendo una alternativa práctica al juicio humano. Está diseñada para ser eficiente y económica, manteniendo consistencia con las puntuaciones humanas. Esta herramienta soporta varias métricas, incluyendo métricas GenAI estándar y personalizables, y permite a los usuarios seleccionar un LLM como juez y definir criterios de evaluación específicos.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-03-01",
        "identifier": "OE-03-01",
        "principle": "Configurar Monitoreo, Alertas y Registro",
        "title": "Monitorear trabajos y datos",
        "capabilities": "Databricks Platform",
        "details": "El monitoreo proporciona información importante sobre jobs y datos que puede ayudar a orientar la toma de decisiones cuando un job falla o faltan datos - así como alertas cuando estos eventos ocurren, para que pueda tomar acciones oportunas.\n\nPuede rastrear métricas como el número de jobs fallidos, tablas que no están recibiendo datos, el timestamp más reciente de ingestión, tasa de ingestión de tablas y el tiempo de ejecución de consultas.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-03-02",
        "identifier": "OE-03-02",
        "principle": "Configurar Monitoreo, Alertas y Registro",
        "title": "Usar herramientas nativas y externas para monitoreo",
        "capabilities": "Databricks Lakehouse Monitoring; Cloud Provided Tooling; Databricks SQL Alerts",
        "details": "Usar herramientas nativas y externas para monitoreo proporciona información sobre sus datos y cargas de trabajo que puede ayudar a identificar un problema potencial antes de que ocurra.\n\nIntegración con Servicios de Monitoreo en Nube:\n- Para Databricks en AWS, puede integrar con Amazon CloudWatch para monitorear su entorno Databricks. CloudWatch le permite derivar métricas de logs y configurar alertas.\n- De manera similar, para Azure Databricks, puede usar Azure Monitor para enviar datos de monitoreo de Databricks y configurar capacidades avanzadas de monitoreo y alertas.\n\nDatabricks Lakehouse Monitoring: Esta característica le permite monitorear las propiedades estadísticas y la calidad de los datos en todas las tablas de su cuenta. También permite rastrear el rendimiento de modelos de machine learning monitoreando tablas de inferencia que contienen entradas y predicciones del modelo.\nAWS | Azure | GCP\n\nAlertas de Databricks SQL pueden monitorear la tabla de métricas para condiciones basadas en seguridad, asegurando integridad de datos y respuesta oportuna a problemas potenciales:\n- Alerta de rango estadístico: Se dispara cuando una estadística específica, como la fracción de valores faltantes, excede un umbral predeterminado\n- Alerta de cambio de distribución de datos: Se activa ante cambios en la distribución de datos, según lo indicado por la tabla de métricas de drift\n- Alerta de divergencia de baseline: Alerta si los datos divergen significativamente de un baseline\nAWS | Azure | GCP\n\nMonitoreo de pipeline de Delta Live Tables: Use características integradas en Delta Live Tables para monitoreo y observabilidad de pipelines, incluyendo linaje de datos, historial de actualizaciones y reportes de calidad de datos.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-03-03",
        "identifier": "OE-03-03",
        "principle": "Configurar Monitoreo, Alertas y Registro",
        "title": "Tener estrategia de respuesta a incidentes",
        "capabilities": null,
        "details": "Es crítico tener una estrategia de respuesta a incidentes para minimizar el riesgo de interrupción de negocio y daños financieros, operacionales y de reputación a su organización.\n\nEsto incluye entender el proceso para enviar un ticket de soporte a Databricks y el proceso de escalamiento, así como tener esto documentado para referencia de su organización más amplia.\n\nDatabricks regularmente proporciona previews para darle la oportunidad de evaluar y proporcionar feedback sobre características antes de que estén generalmente disponibles (GA). Los previews vienen en varios grados de madurez con diferentes opciones de soporte basadas en el tipo de lanzamiento. Esta documentación describe los detalles de soporte para cada tipo de lanzamiento.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-03-04",
        "identifier": "OE-03-04",
        "principle": "Configurar Monitoreo, Alertas y Registro",
        "title": "Automatizar acciones basadas en eventos",
        "capabilities": null,
        "details": "Disparar acciones en respuesta a eventos específicos ayuda a automatizar procesos y minimizar la necesidad de gestionar modelos y flujos de trabajo manualmente.\n\nLos webhooks en MLflow Model Registry le permiten automatizar el flujo de trabajo de machine learning disparando acciones en respuesta a eventos específicos. Estos webhooks facilitan integraciones perfectas, permitiendo la ejecución automática de varios procesos. Por ejemplo, los webhooks se usan para:\n- Disparo de flujo de trabajo CI: Validar su modelo automáticamente al crear una nueva versión\n- Notificaciones de equipo: Enviar alertas a través de una aplicación de mensajería cuando se recibe una solicitud de transición de etapa del modelo\n- Evaluación de equidad del modelo: Invocar un flujo de trabajo para evaluar la equidad y sesgo del modelo ante una solicitud de transición a producción\n- Implementación automatizada: Disparar un pipeline de implementación cuando se crea una nueva etiqueta en un modelo\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-04-01",
        "identifier": "OE-04-01",
        "principle": "Gestionar capacidad y cuotas",
        "title": "Gestionar límites y cuotas de servicios",
        "capabilities": "Cloud; Databricks Platform",
        "details": "Gestionar límites y cuotas de servicios es importante para mantener una infraestructura funcionando bien y prevenir costos inesperados. Previenen el aprovisionamiento accidental de más recursos de los necesarios y limitan las solicitudes de API. Como resultado, también protegen contra incidentes de seguridad potenciales que pueden aumentar las facturas.\n\nTodo servicio lanzado en una nube tendrá que tomar en cuenta límites, como límites de tasa de acceso, número de instancias, número de usuarios y requisitos de memoria. Para su proveedor de nube, verifique los límites de la nube. Antes de diseñar una solución, estos límites deben ser comprendidos.\nAWS | Azure | GCP\n\nLímites de la plataforma Databricks: Estos son límites específicos para recursos de Databricks. Los límites para la plataforma general están documentados en Límites.\nAWS | Azure | GCP\n\nLímites de Unity Catalog: Cuotas de Recursos de Unity Catalog\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-04-02",
        "identifier": "OE-04-02",
        "principle": "Gestionar capacidad y cuotas",
        "title": "Planificar capacidad",
        "capabilities": "Databricks Platform",
        "details": "La planificación de capacidad involucra gestionar recursos de nube, como almacenamiento, cómputo y red para mantener el rendimiento mientras optimiza costos.\n\nComprender y planificar para eventos de alta prioridad (volumen) es importante. Si los recursos de nube aprovisionados no son suficientes y las cargas de trabajo no pueden escalar, tales aumentos en volumen causarán una interrupción.\n\nPlanifique para fluctuaciones en la carga esperada que pueden ocurrir por varias razones como cambios súbitos de negocio o incluso eventos mundiales. Pruebe variaciones de carga, incluyendo inesperadas, para asegurar que sus cargas de trabajo puedan escalar. Asegure que todas las regiones puedan escalar adecuadamente para soportar la carga total si una región falla. A considerar:\n\n- Límites y limitaciones de tecnología y servicio de la nube.\n- SLAs al determinar los servicios a usar en el diseño.\n- Análisis de costos para determinar cuánta mejora se realizará en la aplicación si los costos aumentan.",
        "type": "status",
        "status": "open"
      }
    ]
  },
  {
    "id": "security-compliance-privacy",
    "name": "Seguridad, Cumplimiento y Privacidad",
    "description": "Proteger datos y sistemas de amenazas mientras mantiene cumplimiento regulatorio y estándares de privacidad.",
    "questions": [
      {
        "id": "SCP-01-01",
        "identifier": "SCP-01-01",
        "principle": "Gestionar identidad y acceso usando mínimo privilegio",
        "title": "Configurar Single Sign-On (SSO)",
        "capabilities": "Databricks SSO",
        "details": "El Single Sign-On le permite autenticar a sus usuarios utilizando el proveedor de identidad de su organización. Databricks recomienda configurar SSO para mayor seguridad y mejor usabilidad. Una vez configurado el SSO, puede habilitar control de acceso refinado, como autenticación multifactor, a través de su proveedor de identidad. El inicio de sesión unificado le permite gestionar una configuración SSO en su cuenta que se utiliza para la cuenta y los workspaces de Databricks. Si su cuenta fue creada antes del 21 de junio de 2023, también puede gestionar SSO individualmente en su cuenta y workspaces.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-02",
        "identifier": "SCP-01-02",
        "principle": "Gestionar identidad y acceso usando mínimo privilegio",
        "title": "Usar autenticación multifactor (MFA)",
        "capabilities": "Databricks SSO",
        "details": "Use MFA con su proveedor de identidad y use SSO con Databricks.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-03",
        "identifier": "SCP-01-03",
        "principle": "Gestionar identidad y acceso usando mínimo privilegio",
        "title": "Usar SSO para eliminar contraseñas locales",
        "capabilities": "Databricks SSO",
        "details": "Use SSO con Databricks para garantizar que no se utilicen contraseñas locales. Para administradores, use una política de contraseñas.\nDatabricks le permite establecer una política de contraseñas para todos los usuarios, incluido el Propietario de la Cuenta. Puede establecer requisitos de longitud, complejidad y reglas de caducidad para garantizar que las contraseñas sean seguras y se actualicen regularmente.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-04",
        "identifier": "SCP-01-04",
        "principle": "Gestionar identidad y acceso usando mínimo privilegio",
        "title": "Configurar política de contraseñas",
        "capabilities": "Databricks SSO",
        "details": "Política de contraseñas: Databricks le permite establecer una política de contraseñas para todos los usuarios, incluido el Propietario de la Cuenta. Puede establecer requisitos de longitud, complejidad y reglas de caducidad para garantizar que las contraseñas sean seguras y se actualicen regularmente.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-05",
        "identifier": "SCP-01-05",
        "principle": "Gestionar identidad y acceso usando mínimo privilegio",
        "title": "Gestionar privilegios de administrador",
        "capabilities": "Databricks Admin",
        "details": "Hay dos niveles principales de privilegios de administrador disponibles en la plataforma Databricks:\n\nAdministradores de cuenta: Gestionan la cuenta de Databricks, incluida la creación de workspace, gestión de usuarios, recursos en la nube y monitoreo del uso de la cuenta.\nAWS | Azure | GCP\n\nAdministradores de workspace: Gestionan identidades del workspace, control de acceso, configuraciones y características para workspaces individuales en la cuenta.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-06",
        "identifier": "SCP-01-06",
        "principle": "Gestionar identidad y acceso usando mínimo privilegio",
        "title": "Gestionar tokens de acceso personal",
        "capabilities": "Token Management",
        "details": "Cuando los tokens de acceso personal están habilitados en un workspace, los usuarios con permiso CAN USE pueden generar tokens de acceso personal para acceder a las APIs REST de Databricks, y pueden generar estos tokens con cualquier fecha de caducidad que deseen, incluyendo una vida útil indefinida. Por defecto, ningún usuario no administrador del workspace tiene permiso CAN USE, lo que significa que no pueden crear o usar tokens de acceso personal.\n\nComo administrador de workspace de Databricks, puede deshabilitar tokens de acceso personal para un workspace, monitorear y revocar tokens, controlar qué usuarios no administradores pueden crear y usar tokens, y establecer una vida útil máxima para nuevos tokens.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-07",
        "identifier": "SCP-01-07",
        "principle": "Gestionar identidad y acceso usando mínimo privilegio",
        "title": "Configurar sincronización SCIM",
        "capabilities": "Scim Sync",
        "details": "SCIM le permite usar un proveedor de identidad (IdP) para crear usuarios en Databricks, darles el nivel adecuado de acceso y eliminar el acceso (desprovisionarlos) cuando abandonan su organización o ya no necesitan acceso a Databricks.\n\nPuede usar un conector de aprovisionamiento SCIM en su IdP o invocar las APIs SCIM de Gestión de Identidad y Acceso para gestionar el aprovisionamiento. También puede usar estas APIs para gestionar identidades en Databricks directamente, sin un IdP.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-08",
        "identifier": "SCP-01-08",
        "principle": "Gestionar identidad y acceso usando mínimo privilegio",
        "title": "Usar políticas de cluster",
        "capabilities": "Databricks Cluster Policies",
        "details": "Una política es una herramienta que los administradores de workspace pueden usar para limitar los permisos de creación de computación de un usuario o grupo basándose en un conjunto de reglas de política.\nLas políticas proporcionan los siguientes beneficios:\n\nLimitar usuarios a crear clusters con configuraciones prescritas.\nLimitar usuarios a crear un cierto número de clusters.\nSimplificar la interfaz de usuario y permitir que más usuarios creen sus propios clusters (fijando y ocultando algunos valores).\nControlar costos limitando el costo máximo por cluster (estableciendo límites en atributos cuyos valores contribuyen al precio por hora).\nAplicar instalaciones de bibliotecas con alcance de cluster (Vista Previa Pública).\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-09",
        "identifier": "SCP-01-09",
        "principle": "Gestionar identidad y acceso usando mínimo privilegio",
        "title": "Usar gestión de secretos",
        "capabilities": "Databricks Secret Management",
        "details": "https://docs.databricks.com/en/security/secrets/index.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-10",
        "identifier": "SCP-01-10",
        "principle": "Gestionar identidad y acceso usando mínimo privilegio",
        "title": "Configurar permisos de nube con mínimo privilegio",
        "capabilities": null,
        "details": "https://docs.databricks.com/en/administration-guide/cloud-configurations/aws/permissions.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-11",
        "identifier": "SCP-01-11",
        "principle": "Gestionar identidad y acceso usando mínimo privilegio",
        "title": "Usar inicio de sesión único (SSO) para autenticación",
        "capabilities": "Databricks SSO",
        "details": "El Single Sign-On le permite autenticar a sus usuarios utilizando el proveedor de identidad de su organización. Databricks recomienda configurar SSO para mayor seguridad y mejor usabilidad. Una vez configurado el SSO, puede habilitar control de acceso refinado, como autenticación multifactor, a través de su proveedor de identidad. El inicio de sesión unificado le permite gestionar una configuración SSO en su cuenta que se utiliza para la cuenta y los workspaces de Databricks. Si su cuenta fue creada antes del 21 de junio de 2023, también puede gestionar SSO individualmente en su cuenta y workspaces.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-12",
        "identifier": "SCP-01-12",
        "principle": "Gestionar identidad y acceso usando mínimo privilegio",
        "title": "Configurar modo de acceso de computación",
        "capabilities": "Unity Catalog",
        "details": "El modo de acceso es una característica de seguridad que determina quién puede usar la computación y qué datos pueden acceder a través de la computación. Cada computación en Databricks tiene un modo de acceso.\n\nDatabricks recomienda usar el modo de acceso compartido para todas las cargas de trabajo. Use solo el modo de acceso de usuario único si la funcionalidad requerida no es compatible con el modo de acceso compartido.\n\nAWS | Azure | GCP\nBlog\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-13",
        "identifier": "SCP-01-13",
        "principle": "Gestionar identidad y acceso usando mínimo privilegio",
        "title": "Usar service principals para automatización",
        "capabilities": "Unity Catalog",
        "details": "Un service principal es una identidad que crea en Databricks para usar con herramientas automatizadas, trabajos y aplicaciones. Los service principals dan a herramientas automatizadas y scripts acceso solo a través de API a recursos de Databricks, proporcionando mayor seguridad que usar usuarios o grupos.\n\nPuede otorgar y restringir el acceso de un service principal a recursos de la misma manera que puede hacerlo con un usuario de Databricks. Por ejemplo, puede:\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-02-01",
        "identifier": "SCP-02-01",
        "principle": "Proteger datos en tránsito y en reposo",
        "title": "Evitar almacenar datos sensibles en DBFS root",
        "capabilities": "Databricks Workspace",
        "details": "Debido a que el DBFS root es accesible para todos los usuarios en un workspace, todos los usuarios pueden acceder a cualquier dato almacenado allí. Es importante instruir a los usuarios para evitar usar esta ubicación para almacenar datos sensibles. La ubicación predeterminada para tablas gestionadas en el Hive metastore en Databricks es el DBFS root; para evitar que los usuarios finales que crean tablas gestionadas escriban en el DBFS root, declare una ubicación en almacenamiento externo al crear bases de datos en el Hive metastore.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-02-02",
        "identifier": "SCP-02-02",
        "principle": "Proteger datos en tránsito y en reposo",
        "title": "Usar Unity Catalog para gestionar acceso al almacenamiento en nube",
        "capabilities": "Unity Catalog",
        "details": "Databricks recomienda usar Unity Catalog para gestionar el acceso a todos los datos almacenados en almacenamiento de objetos en la nube. Unity Catalog proporciona un conjunto de herramientas para configurar conexiones seguras al almacenamiento de objetos en la nube.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-02-03",
        "identifier": "SCP-02-03",
        "principle": "Proteger datos en tránsito y en reposo",
        "title": "Implementar protección contra exfiltración de datos",
        "capabilities": "Databricks Workspace",
        "details": "https://www.databricks.com/blog/2021/02/02/data-exfiltration-protection-with-databricks-on-aws.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-02-04",
        "identifier": "SCP-02-04",
        "principle": "Proteger datos en tránsito y en reposo",
        "title": "Usar versionado de bucket S3 para redundancia adicional",
        "capabilities": "Cloud",
        "details": "Puede usar el versionado de bucket S3 para proporcionar redundancia adicional para datos almacenados con Delta Lake. Databricks recomienda implementar una política de gestión de ciclo de vida para todos los buckets S3 con versionado habilitado. Databricks recomienda mantener tres versiones.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-02-05",
        "identifier": "SCP-02-05",
        "principle": "Proteger datos en tránsito y en reposo",
        "title": "Usar ubicaciones externas para control de acceso",
        "capabilities": "Unity Catalog",
        "details": "Una ubicación externa es un objeto que combina una ruta de almacenamiento en nube con una credencial de almacenamiento que autoriza el acceso a la ruta de almacenamiento en nube. Cada ubicación de almacenamiento está sujeta a las políticas de control de acceso de Unity Catalog que controlan qué usuarios y grupos pueden acceder a la credencial. Si un usuario no tiene acceso a una ubicación de almacenamiento en Unity Catalog, la solicitud falla y Unity Catalog no intenta autenticar en su tenant de nube en nombre del usuario.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-02-06",
        "identifier": "SCP-02-06",
        "principle": "Proteger datos en tránsito y en reposo",
        "title": "Usar claves gestionadas por el cliente para cifrado",
        "capabilities": "Unity Catalog",
        "details": "Databricks tiene dos casos de uso de claves gestionadas por el cliente que involucran diferentes tipos de datos y ubicaciones:\n\nServicios gestionados: Datos en el plano de control de Databricks (notebooks, secretos y datos de consulta de Databricks SQL).\nAlmacenamiento del workspace: Sus buckets S3 raíz del workspace y los volúmenes EBS de recursos de cómputo en el plano de cómputo clásico.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-02-07",
        "identifier": "SCP-02-07",
        "principle": "Proteger datos en tránsito y en reposo",
        "title": "Configurar protección contra exfiltración de datos en la red",
        "capabilities": "Databricks Workspace",
        "details": "https://www.databricks.com/blog/2021/02/02/data-exfiltration-protection-with-databricks-on-aws.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-03-01",
        "identifier": "SCP-03-01",
        "principle": "Proteger su red e identificar y proteger endpoints",
        "title": "Usar VPC gestionada por el cliente",
        "capabilities": "Cloud",
        "details": "Por defecto, los clusters se crean en una sola AWS VPC (Virtual Private Cloud) que Databricks crea y configura en su cuenta de AWS. Opcionalmente puede crear sus workspaces de Databricks en su propia VPC, una característica conocida como VPC gestionada por el cliente. Puede usar una VPC gestionada por el cliente para ejercer más control sobre sus configuraciones de red para cumplir con estándares específicos de seguridad y gobernanza de nube que su organización pueda requerir. Para configurar su workspace para usar AWS Private Link para cualquier tipo de conexión, su workspace debe usar una VPC gestionada por el cliente.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-03-02",
        "identifier": "SCP-03-02",
        "principle": "Proteger su red e identificar y proteger endpoints",
        "title": "Configurar listas de acceso IP",
        "capabilities": "Cloud",
        "details": "https://docs.databricks.com/en/security/network/front-end/ip-access-list.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-03-03",
        "identifier": "SCP-03-03",
        "principle": "Proteger su red e identificar y proteger endpoints",
        "title": "Implementar controles de exfiltración de red",
        "capabilities": "Cloud",
        "details": "https://www.databricks.com/blog/2021/02/02/data-exfiltration-protection-with-databricks-on-aws.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-03-04",
        "identifier": "SCP-03-04",
        "principle": "Proteger su red e identificar y proteger endpoints",
        "title": "Implementar políticas de acceso privado a la consola",
        "capabilities": "Databricks Workspace",
        "details": "https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/implementing-console-private-access-policies.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-03-05",
        "identifier": "SCP-03-05",
        "principle": "Proteger su red e identificar y proteger endpoints",
        "title": "Configurar políticas de acceso a endpoints VPC",
        "capabilities": "IP access List",
        "details": "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-access.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-03-06",
        "identifier": "SCP-03-06",
        "principle": "Proteger su red e identificar y proteger endpoints",
        "title": "Usar Private Link para conectividad segura",
        "capabilities": "Private link",
        "details": "https://docs.databricks.com/en/security/network/classic/privatelink.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-04-01",
        "identifier": "SCP-04-01",
        "principle": "Revisar el Modelo de Responsabilidad Compartida",
        "title": "Entender el modelo de responsabilidad compartida",
        "capabilities": "Shared Responsibility Model",
        "details": "El modelo de responsabilidad compartida de Databricks describe las obligaciones de seguridad y cumplimiento de Databricks, del proveedor de servicios en nube y del cliente con respecto a los datos y servicios en la plataforma Databricks.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-05-01",
        "identifier": "SCP-05-01",
        "principle": "Cumplir requisitos de cumplimiento y privacidad de datos",
        "title": "Seguir la guía de seguridad y cumplimiento",
        "capabilities": "Security and Compliance Guide",
        "details": "https://docs.databricks.com/en/security/index.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-06-01",
        "identifier": "SCP-06-01",
        "principle": "Monitorear seguridad del sistema",
        "title": "Usar herramientas de observabilidad como Overwatch",
        "capabilities": "Unity Catalog",
        "details": "https://community.databricks.com/t5/technical-blog/overwatch-the-observability-tool-for-databricks/ba-p/54120",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-06-02",
        "identifier": "SCP-06-02",
        "principle": "Monitorear seguridad del sistema",
        "title": "Usar tablas de sistema para logs de auditoría",
        "capabilities": "Unity Catalog",
        "details": "https://docs.databricks.com/en/administration-guide/system-tables/audit-logs.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-06-03",
        "identifier": "SCP-06-03",
        "principle": "Monitorear seguridad del sistema",
        "title": "Analizar logs de auditoría regularmente",
        "capabilities": "Unity Catalog",
        "details": "https://docs.databricks.com/en/administration-guide/system-tables/audit-logs.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-06-04",
        "identifier": "SCP-06-04",
        "principle": "Monitorear seguridad del sistema",
        "title": "Usar perfil de seguridad de cumplimiento",
        "capabilities": "Databricks Compliance security profile",
        "details": "Enhanced Security Monitoring (ESM) y Compliance Security Profile (CSP) proporcionan la base de seguridad más segura para despliegues de Databricks.\nEnhanced Security Monitoring proporciona:\n1. Una AMI con hardening CIS Level 1 mejorado\n2. Monitoreo de malware basado en comportamiento y monitoreo de integridad de archivos (Capsule8)\n3. Detección de malware y antivirus (ClamAV)\n4. Reportes de vulnerabilidad Qualys de un host OS representativo\nCompliance Security Profile toma todos los beneficios anteriores y agrega controles de seguridad adicionales requeridos para cumplir con los requisitos de cumplimiento:\n1. Módulos de cifrado validados FIPS 140-2 Level 1 (donde sea posible)\n2. Aplicación de AWS Nitro VM para cifrado de datos en reposo y en tránsito\n3. Aplicación de actualización de cluster (reinicio automático después de 25 días)\n4. Características y controles compatibles con HIPAA, PCI-DSS, FedRAMP Moderate\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-06-05",
        "identifier": "SCP-06-05",
        "principle": "Monitorear seguridad del sistema",
        "title": "Usar etiquetas para rastrear uso y facturación",
        "capabilities": "Tagging",
        "details": "Para rastrear el uso de Databricks a través de la facturación de recursos AWS, puede configurar etiquetas en clusters o pools. Estas también pueden aplicarse mediante políticas de cluster para diferentes grupos dentro de su organización.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-07-01",
        "identifier": "SCP-07-01",
        "principle": "Controles genéricos",
        "title": "Usar instancias AWS Nitro para seguridad mejorada",
        "capabilities": "Databricks Compliance security profile",
        "details": "Las instancias AWS Nitro pueden proporcionar dos grandes beneficios de seguridad:\n1. Las instancias AWS Nitro usan discos NVMe que cifran automáticamente datos en reposo. De la documentación de AWS del 19 de julio de 2021:\nLos datos en el almacenamiento de instancia NVMe se cifran usando un cifrado de bloque XTS-AES-256 implementado en un módulo de hardware en la instancia. Las claves de cifrado se generan usando el módulo de hardware y son únicas para cada dispositivo de almacenamiento de instancia NVMe. Todas las claves de cifrado se destruyen cuando la instancia se detiene o termina y no pueden recuperarse. No puede deshabilitar este cifrado y no puede proporcionar su propia clave de cifrado.\n2. Muchas instancias AWS Nitro también cifran automáticamente datos en tránsito entre hosts. Puede configurar tipos de instancia incluidos en la sección Encryption in Transit de la documentación de AWS Nitro para que el tráfico intra-cluster (inter-host) se cifre en tránsito.\nDatabricks no puede proporcionar autoridad sobre detalles de capacidades en AWS, y la información anterior se proporciona con el mejor esfuerzo como conveniencia para clientes de Databricks.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-07-02",
        "identifier": "SCP-07-02",
        "principle": "Controles genéricos",
        "title": "Entender cuotas y límites de la plataforma",
        "capabilities": "Databricks Quotas",
        "details": "Todo servicio lanzado en una nube tendrá que tomar en cuenta límites, como límites de tasa de acceso, número de instancias, número de usuarios y requisitos de memoria. Para su proveedor de nube, verifique los límites de la nube. Antes de diseñar una solución, estos límites deben ser comprendidos.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-07-03",
        "identifier": "SCP-07-03",
        "principle": "Controles genéricos",
        "title": "Usar CI/CD con escaneo de código para cargas de trabajo sensibles",
        "capabilities": "Cloud",
        "details": "Organizaciones maduras frecuentemente construyen cargas de trabajo de producción usando CI/CD para integrar escaneo de código, mejor control de permisos, realizar linting y más. Cuando hay datos altamente sensibles siendo analizados, un proceso de CI/CD también puede permitir el escaneo de escenarios conocidos, como secretos codificados.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-07-04",
        "identifier": "SCP-07-04",
        "principle": "Controles genéricos",
        "title": "Usar aislamiento de workspace para cargas de trabajo sensibles",
        "capabilities": "Databricks Workspace",
        "details": "Aunque Databricks tiene numerosas capacidades para aislar diferentes cargas de trabajo, como ACLs de tabla e IAM passthrough para cargas de trabajo muy sensibles, el método de aislamiento principal es mover cargas de trabajo sensibles a un workspace diferente. Esto a veces sucede cuando un cliente tiene equipos muy diferentes (por ejemplo, un equipo de seguridad y un equipo de marketing) que deben analizar datos diferentes en Databricks.\n\nBlog",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-07-05",
        "identifier": "SCP-07-05",
        "principle": "Controles genéricos",
        "title": "Hospedar repositorios propios de bibliotecas para ataques a la cadena de suministro",
        "capabilities": "Databricks Libraries",
        "details": "Por defecto, Databricks permite a los clientes instalar bibliotecas Python, R o Scala de los repositorios públicos estándar, como pypi, CRAN o maven.\nAquellos que están preocupados por ataques a la cadena de suministro pueden hospedar sus propios repositorios y luego configurar Databricks para usarlos. Puede bloquear el acceso a otras fuentes de bibliotecas. La documentación para hacer esto está fuera del alcance de este documento, pero contacte a su equipo de Databricks para asistencia según sea necesario.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      }
    ]
  },
  {
    "id": "reliability",
    "name": "Confiabilidad",
    "description": "Recuperarse de fallos y continuar funcionando con mínimo tiempo de inactividad y pérdida de datos.",
    "questions": [
      {
        "id": "R-01-01",
        "identifier": "R-01-01",
        "principle": "Diseñar para tolerancia a fallos",
        "title": "Usar formato de datos con soporte para transacciones ACID",
        "capabilities": "Delta Lake",
        "details": "Delta Lake es un formato de almacenamiento open source que aporta fiabilidad a los data lakes. Delta Lake proporciona transacciones ACID, aplicación de esquema, manejo escalable de metadatos y unifica el procesamiento de datos en streaming y batch. Delta Lake se ejecuta sobre su data lake existente y es totalmente compatible con las APIs de Apache Spark. Delta Lake en Databricks le permite configurar Delta Lake basándose en los patrones de su carga de trabajo.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-01-02",
        "identifier": "R-01-02",
        "principle": "Diseñar para tolerancia a fallos",
        "title": "Usar un motor de datos distribuido resiliente para todas las cargas de trabajo",
        "capabilities": "Apache Spark; Photon",
        "details": "Apache Spark, como motor de computación del lakehouse de Databricks, se basa en procesamiento de datos distribuido resiliente. En caso de que una tarea interna de Spark no devuelva un resultado como se esperaba, Apache Spark reprograma automáticamente las tareas faltantes y continúa con la ejecución del trabajo completo. Esto es útil para fallos fuera del código, como un problema de red breve o una VM spot revocada. Trabajar tanto con la API SQL como con la API DataFrame de Spark viene con esta resiliencia integrada en el motor.\n\nEn el lakehouse de Databricks, Photon, un motor vectorizado nativo escrito completamente en C++, es computación de alto rendimiento compatible con las APIs de Apache Spark.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-01-03",
        "identifier": "R-01-03",
        "principle": "Diseñar para tolerancia a fallos",
        "title": "Rescatar automáticamente datos inválidos o no conformes",
        "capabilities": "Delta Live Tables",
        "details": "Los datos inválidos o no conformes pueden llevar a fallos de cargas de trabajo que dependen de un formato de datos establecido. Para aumentar la resiliencia de extremo a extremo de todo el proceso, es mejor práctica filtrar datos inválidos y no conformes en la ingesta. Soportar datos rescatados garantiza que nunca pierda o se quede sin datos durante la ingesta o ETL. La columna de datos rescatados contiene cualquier dato que no fue parseado, ya sea porque faltaba en el esquema dado, porque había una incompatibilidad de tipo, o el case de la columna en el registro o archivo no coincidía con el del esquema.\n\nAWS | Azure | GCP\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-01-04",
        "identifier": "R-01-04",
        "principle": "Diseñar para tolerancia a fallos",
        "title": "Configurar trabajos para reintentos automáticos y terminación",
        "capabilities": "Databricks Workflows",
        "details": "Los sistemas distribuidos son complejos, y un fallo en un punto puede potencialmente propagarse por todo el sistema.\n\nLos trabajos de Databricks soportan una política de reintento automático que determina cuándo y cuántas veces se reintentan las ejecuciones fallidas.\n\nDelta Live Tables también automatiza la recuperación de fallos usando reintentos escalonados para equilibrar velocidad con fiabilidad. Ver Modos de desarrollo y producción.\n\nPor otro lado, una tarea que se cuelga puede impedir que el trabajo completo termine, incurriendo en altos costos. Los trabajos de Databricks soportan una configuración de timeout para terminar trabajos que tardan más de lo esperado.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-01-05",
        "identifier": "R-01-05",
        "principle": "Diseñar para tolerancia a fallos",
        "title": "Usar infraestructura de serving de modelos escalable y lista para producción",
        "capabilities": "Databricks Model Serving",
        "details": "Para inferencia batch y streaming, use trabajos de Databricks y MLflow para desplegar modelos como UDFs de Apache Spark para aprovechar la programación de trabajos, reintentos, auto-scaling, etc.\nModel Serving proporciona una infraestructura de serving de modelos en tiempo real escalable y lista para producción. Procesa sus modelos de machine learning usando MLflow y los expone como endpoints de API REST. Esta funcionalidad usa computación serverless, lo que significa que los endpoints y recursos de computación asociados son gestionados y ejecutados en la cuenta de nube de Databricks.\n\nAWS | Azure | GCP\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-01-06",
        "identifier": "R-01-06",
        "principle": "Diseñar para tolerancia a fallos",
        "title": "Usar servicios gestionados para sus cargas de trabajo",
        "capabilities": "Databricks Platform",
        "details": "Aproveche los servicios gestionados de la Plataforma de Inteligencia de Datos de Databricks como computación serverless, model serving o Delta Live Tables donde sea posible. Estos servicios son - sin esfuerzo extra del cliente - operados por Databricks de forma fiable y escalable, haciendo las cargas de trabajo más fiables.\n\nAWS | Azure | GCP\nAWS | Azure | GCP\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-02-01",
        "identifier": "R-02-01",
        "principle": "Gestionar calidad de datos",
        "title": "Usar arquitectura de almacenamiento en capas",
        "capabilities": "Databricks Lakehouse Architecture",
        "details": "Curar datos creando una arquitectura en capas y asegurando que la calidad de los datos aumente a medida que los datos se mueven a través de las capas. Un enfoque común de capas es:\n\nCapa bruta (bronze): Los datos de origen se ingestan en el lakehouse en la primera capa y deben persistirse allí. Cuando todos los datos downstream se crean a partir de la capa bruta, reconstruir las capas subsiguientes desde esta capa es posible si es necesario.\n\nCapa curada (silver): El propósito de la segunda capa es mantener datos limpios, refinados, filtrados y agregados. El objetivo de esta capa es proporcionar una base sólida y confiable para análisis e informes en todas las funciones y roles.\n\nCapa final (gold): La tercera capa se crea alrededor de las necesidades de negocios o proyectos. Proporciona una vista diferente como productos de datos para otras unidades de negocio o proyectos, preparando datos alrededor de necesidades de seguridad (como datos anonimizados) u optimizando para rendimiento (como con vistas pre-agregadas). Los productos de datos en esta capa se ven como la verdad para el negocio.\n\nLa capa final debe contener solo datos de alta calidad y puede ser totalmente confiable desde el punto de vista de negocios.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-02-02",
        "identifier": "R-02-02",
        "principle": "Gestionar calidad de datos",
        "title": "Mejorar integridad de datos reduciendo redundancia",
        "capabilities": "Databricks Platform",
        "details": "Copiar o duplicar datos crea redundancia de datos y llevará a pérdida de integridad, pérdida de linaje de datos y frecuentemente diferentes permisos de acceso. Esto disminuirá la calidad de los datos en el lakehouse. Una copia temporal o desechable de datos no es dañina por sí misma - a veces es necesaria para impulsar agilidad, experimentación e innovación. Sin embargo, si estas copias se vuelven operacionales y regularmente usadas para decisiones de negocio, se convierten en silos de datos. Estos silos de datos desincronizándose tiene un impacto negativo significativo en la integridad y calidad de los datos, planteando preguntas como '¿Qué conjunto de datos es el maestro?' o '¿El conjunto de datos está actualizado?'.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-02-03",
        "identifier": "R-02-03",
        "principle": "Gestionar calidad de datos",
        "title": "Gestionar esquemas activamente",
        "capabilities": "Unity Catalog",
        "details": "Cambios de esquema no controlados pueden llevar a datos inválidos y trabajos fallando que usan esos conjuntos de datos. Databricks tiene varios métodos para validar y aplicar el esquema:\n\nDelta Lake soporta validación de esquema y aplicación de esquema manejando automáticamente variaciones de esquema para evitar la inserción de registros malos durante la ingestión.\n\nAuto Loader detecta la adición de nuevas columnas a medida que procesa sus datos. Por defecto, la adición de una nueva columna hace que sus streams se detengan con una UnknownFieldException. Auto Loader soporta varios modos para evolución de esquema.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-02-04",
        "identifier": "R-02-04",
        "principle": "Gestionar calidad de datos",
        "title": "Usar constraints y expectations de datos",
        "capabilities": "Delta Live Tables",
        "details": "Las tablas Delta soportan cláusulas estándar de gestión de constraints SQL que aseguran que la calidad e integridad de los datos agregados a una tabla se verifiquen automáticamente. Cuando un constraint se viola, Delta Lake lanza un error InvariantViolationException para señalar que los nuevos datos no pueden agregarse. Vea Constraints en Databricks.\n\nPara mejorar aún más este manejo, Delta Live Tables soporta Expectations: Expectations definen constraints de calidad de datos en el contenido de un conjunto de datos. Una expectation consiste en una descripción, un invariante y una acción a tomar cuando un registro falla el invariante. Expectations para consultas usan decoradores Python o cláusulas de constraint SQL. Vea Manage data quality with Delta Live Tables.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-02-05",
        "identifier": "R-02-05",
        "principle": "Gestionar calidad de datos",
        "title": "Adoptar enfoque centrado en datos para machine learning",
        "capabilities": "Databricks Platform",
        "details": "Un principio guía que continúa en el corazón de la visión de IA para la Plataforma de Inteligencia de Datos Databricks es adoptar un enfoque centrado en datos para machine learning. Con la creciente prevalencia de IA generativa, esta perspectiva sigue siendo igualmente importante. Los componentes centrales de cualquier proyecto de ML pueden verse simplemente como pipelines de datos.\n\nPipelines de ingeniería de features, entrenamiento, inferencia y monitoreo son pipelines de datos. Deben ser tan robustos como otros procesos de ingeniería de datos de producción. La calidad de los datos es crucial en cualquier aplicación de ML, así que los pipelines de datos de ML deben emplear enfoques sistemáticos para monitorear y mitigar problemas de calidad de datos. Evite herramientas que dificulten unir datos de predicciones de ML, monitoreo de modelos, etc., con el resto de sus datos. La manera más simple de lograr esto es desarrollar aplicaciones de ML en la misma plataforma usada para gestionar datos de producción.\n\neBook",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-03-01",
        "identifier": "R-03-01",
        "principle": "Diseñar para auto-escalado",
        "title": "Habilitar auto-escalado para cargas ETL",
        "capabilities": "Databricks Workflows",
        "details": "El auto-scaling permite que los clusters redimensionen automáticamente basándose en las cargas de trabajo. El auto-scaling puede beneficiar muchos casos de uso y escenarios tanto desde una perspectiva de costo como de rendimiento. La documentación proporciona consideraciones para determinar si debe usar auto-scaling y cómo obtener el mayor beneficio.\n\nPara cargas de trabajo de streaming, Databricks recomienda usar Delta Live Tables con auto-scaling. Vea Use autoscaling to increase efficiency and reduce resource usage.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-03-02",
        "identifier": "R-03-02",
        "principle": "Diseñar para auto-escalado",
        "title": "Usar auto-escalado para SQL Warehouses",
        "capabilities": "Databricks SQL",
        "details": "El parámetro de escalado de un SQL warehouse define el número mínimo y máximo de clusters sobre los cuales se distribuyen las consultas enviadas al warehouse. El valor predeterminado es un mínimo de uno y un máximo de un cluster.\n\nPara manejar más usuarios simultáneos para un warehouse dado, aumente el conteo de clusters. Para saber cómo Databricks agrega y elimina clusters de un warehouse, vea SQL warehouse sizing, scaling, and queuing behavior.\n\nAWS | Azure | GCP\n\nEl enhanced autoscaling de Databricks optimiza la utilización del cluster asignando automáticamente recursos del cluster basándose en el volumen de carga de trabajo, con impacto mínimo en la latencia de procesamiento de datos de sus pipelines.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-04-01",
        "identifier": "R-04-01",
        "principle": "Probar procedimientos de recuperación",
        "title": "Recuperar de fallos de consultas Structured Streaming",
        "capabilities": "Structured Streaming",
        "details": "Structured Streaming proporciona tolerancia a fallos y consistencia de datos para consultas de streaming. Usando Databricks workflows, puede fácilmente configurar sus consultas Structured Streaming para reiniciar automáticamente en caso de fallo. La consulta reiniciada continúa donde la fallida se detuvo.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-04-02",
        "identifier": "R-04-02",
        "principle": "Probar procedimientos de recuperación",
        "title": "Recuperar trabajos ETL usando capacidades de time travel",
        "capabilities": "Delta Lake - Delta Time Travel",
        "details": "A pesar de pruebas exhaustivas, un trabajo en producción puede fallar o producir algunos datos inesperados, incluso inválidos. A veces esto puede corregirse con un trabajo adicional después de entender el origen del problema y corregir el pipeline que llevó al problema en primer lugar. Sin embargo, frecuentemente esto no es directo, y el respectivo trabajo debe ser revertido. Usando Delta Time travel permite a los usuarios fácilmente revertir cambios a una versión o timestamp anterior, reparar el pipeline y reiniciar el pipeline corregido. Vea What is Delta Lake time travel?.\n\nUna manera conveniente de hacer esto es el comando RESTORE.\n\nAWS | Azure | GCP\nBlog",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-04-03",
        "identifier": "R-04-03",
        "principle": "Probar procedimientos de recuperación",
        "title": "Usar framework de automatización de trabajos con recuperación integrada",
        "capabilities": "Databricks Workflows",
        "details": "Los Databricks Workflows están construidos para recuperación. Cuando una tarea en un trabajo multi-tarea falla (y, como tal, todas las tareas dependientes), Databricks Workflows proporcionan una vista de matriz de las ejecuciones, que permite examinar el problema que llevó al fallo. Vea View runs for a job. Sea un breve problema de red o un problema real en los datos, puede corregirlo e iniciar una ejecución de reparación en Databricks Workflows. Ejecuta solo las tareas fallidas y dependientes y mantiene los resultados exitosos de la ejecución anterior, ahorrando tiempo y dinero.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-04-04",
        "identifier": "R-04-04",
        "principle": "Probar procedimientos de recuperación",
        "title": "Configurar patrón de recuperación de desastres",
        "capabilities": null,
        "details": "Databricks es frecuentemente una parte central de un ecosistema de datos general que incluye muchos servicios, incluyendo servicios de ingestión de datos upstream (batch/streaming), almacenamiento nativo en nube, herramientas y servicios downstream como aplicaciones de business intelligence y herramientas de orquestación. Algunos de sus casos de uso pueden ser particularmente sensibles a una interrupción regional en todo el servicio.\n\nLa recuperación de desastres involucra un conjunto de políticas, herramientas y procedimientos que permiten la recuperación o continuación de infraestructura y sistemas de tecnología vitales después de un desastre natural o inducido por el hombre. Un gran servicio de nube como Azure, AWS o GCP atiende muchos clientes y tiene protecciones integradas contra una sola falla. Sin embargo, fallos de región de nube pueden suceder, y el grado de interrupción y su impacto en su organización puede variar.\n\nPartes esenciales de una estrategia de recuperación de desastres son seleccionar una estrategia (activo/activo o activo/pasivo), seleccionar el conjunto de herramientas correcto y probar tanto el failover como la restauración.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-05-01",
        "identifier": "R-05-01",
        "principle": "Monitorear eventos de la plataforma",
        "title": "Monitorear eventos de la plataforma de datos",
        "capabilities": null,
        "details": "Monitorear eventos de la plataforma de datos y ML",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-05-02",
        "identifier": "R-05-02",
        "principle": "Monitorear eventos de la plataforma",
        "title": "Monitorear eventos de la nube",
        "capabilities": null,
        "details": "Monitorear eventos en su proveedor de nube",
        "type": "status",
        "status": "open"
      }
    ]
  },
  {
    "id": "performance-efficiency",
    "name": "Eficiencia de Rendimiento",
    "description": "Optimizar uso de recursos y adaptarse a demandas cambiantes eficientemente.",
    "questions": [
      {
        "id": "PE-01-01",
        "identifier": "PE-01-01",
        "principle": "Utilizar capacidades serverless",
        "title": "Usar arquitectura serverless",
        "capabilities": "Databricks Serverless Compute",
        "details": "Con la computación serverless en la Plataforma de Inteligencia de Datos de Databricks, la capa de computación se ejecuta en la cuenta de Databricks del cliente. Los administradores de workspace pueden crear SQL warehouses serverless que permiten computación instantánea y son gestionados por Databricks. Un SQL warehouse serverless usa clusters de computación alojados en la cuenta del cliente de Databricks. Úselos con consultas de Databricks SQL como lo haría normalmente con los SQL warehouses originales de Databricks. La computación serverless viene con un tiempo de inicio muy rápido para SQL warehouses (10s o menos), y la infraestructura es gestionada por Databricks.\n\nEsto lleva a una productividad mejorada:\n\nLos administradores de nube ya no tienen que gestionar entornos de nube complejos, por ejemplo ajustando cuotas, creando y manteniendo activos de red, y uniendo fuentes de facturación.\n\nLos usuarios se benefician de tiempos de espera casi cero para el inicio de cluster y concurrencia mejorada en sus consultas.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-01-02",
        "identifier": "PE-01-02",
        "principle": "Utilizar capacidades serverless",
        "title": "Usar servicio de serving de modelos de nivel empresarial",
        "capabilities": "Databricks Model Serving",
        "details": "Databricks Model Serving proporciona una interfaz unificada para desplegar, gobernar y consultar modelos de IA. Cada modelo que sirve está disponible como una API REST que puede integrar en su aplicación web o cliente.\n\nModel Serving proporciona un servicio altamente disponible y de baja latencia para desplegar modelos. El servicio escala automáticamente hacia arriba o hacia abajo para satisfacer cambios de demanda, ahorrando costos de infraestructura mientras optimiza el rendimiento de latencia. Esta funcionalidad usa computación serverless.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-01",
        "identifier": "PE-02-01",
        "principle": "Diseñar cargas de trabajo para rendimiento",
        "title": "Entender sus patrones de ingesta y acceso a datos",
        "capabilities": null,
        "details": "Desde una perspectiva de rendimiento, los patrones de acceso a datos - como \"agregaciones versus acceso puntual\" o \"scan versus búsqueda\" - se comportan de manera diferente dependiendo del tamaño de los datos. Los archivos grandes son más eficientes para consultas de scan y los archivos más pequeños son mejores para búsqueda, ya que tiene que leer menos datos para encontrar la(s) fila(s) específica(s).\n\nPara patrones de ingesta, es común usar declaraciones DML. Las declaraciones DML son más performantes cuando los datos están clusterizados, y simplemente puede aislar la sección de datos. Mantener los datos clusterizados y aislables en la ingesta es importante: Considere mantener un orden de clasificación temporal natural y aplique tantos filtros como sea posible a la tabla objetivo de ingesta. Para cargas de trabajo de ingesta solo append y overwrite, no hay mucho que considerar, ya que es una operación relativamente barata.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-02",
        "identifier": "PE-02-02",
        "principle": "Diseñar cargas de trabajo para rendimiento",
        "title": "Usar computación paralela donde sea beneficioso",
        "capabilities": "Apache Spark",
        "details": "El tiempo para obtener valor es una dimensión importante al trabajar con datos. Mientras que muchos casos de uso pueden implementarse fácilmente en una sola máquina (datos pequeños, pocos y simples pasos de computación), frecuentemente surgen casos de uso que:\n\nNecesitan procesar grandes conjuntos de datos.\n\nTienen tiempos de ejecución largos debido a algoritmos complicados.\n\nDeben repetirse cientos y miles de veces.\n\nEl entorno de cluster de la plataforma Databricks es un gran entorno para distribuir estas cargas de trabajo eficientemente. Paraleliza automáticamente consultas SQL en todos los nodos de un cluster y proporciona bibliotecas para Python y Scala para hacer lo mismo. Bajo el capó, los motores Apache Spark y Photon analizan las consultas, determinan la forma óptima de ejecución paralela, y gestionan la ejecución distribuida de forma resiliente.\n\nAWS | Azure | GCP\nAWS | Azure | GCP\nAWS | Azure | GCP\nMLlib\nAWS | Azure | GCP\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-03",
        "identifier": "PE-02-03",
        "principle": "Diseñar cargas de trabajo para rendimiento",
        "title": "Analizar toda la cadena de ejecución",
        "capabilities": "Workflows; Unity Catalog",
        "details": "La mayoría de los pipelines o patrones de consumo usan una cadena de sistemas. Por ejemplo, para herramientas de BI, el rendimiento está impactado por varios factores:\nLa herramienta de BI en sí.\nEl conector que conecta la herramienta de BI y el motor SQL.\nEl motor SQL donde la herramienta de BI envía la consulta.\nPara el mejor rendimiento de su clase, toda la cadena necesita ser tenida en cuenta y seleccionada/ajustada para el mejor rendimiento.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-04",
        "identifier": "PE-02-04",
        "principle": "Diseñar cargas de trabajo para rendimiento",
        "title": "Preferir clusters más grandes",
        "capabilities": "Databricks Cluster Configuration",
        "details": "Planifique para clusters más grandes, especialmente cuando la carga de trabajo escala linealmente. En ese caso, no es más caro usar un cluster grande para una carga de trabajo que usar uno más pequeño. Es solo más rápido. La clave es que está alquilando el cluster durante la duración de la carga de trabajo. Entonces, si inicia dos clusters de workers y tarda una hora, está pagando por esos workers durante la hora completa. Similarmente, si inicia un cluster de cuatro workers y tarda solo media hora (aquí entra en juego la escalabilidad lineal), los costos son los mismos. Si los costos son el impulsor principal con un SLA muy flexible, un cluster con auto-scaling casi siempre va a ser el más barato pero no necesariamente el más rápido.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-05",
        "identifier": "PE-02-05",
        "principle": "Diseñar cargas de trabajo para rendimiento",
        "title": "Usar operaciones nativas de Spark",
        "capabilities": "Apache Spark",
        "details": "Las User Defined Functions (UDFs) son una gran manera de extender la funcionalidad de Spark SQL. Sin embargo, no use UDFs de Python o Scala si existe una función nativa:\nSpark SQL\nPySpark\n\nRazones:\nPara transferir datos entre Python y Spark, se necesita serialización. Esto desacelera drásticamente las consultas.\nMayores esfuerzos para implementar y probar funcionalidad ya existente en la plataforma.\n\nSi faltan funciones nativas y deben implementarse como UDFs de Python, use Pandas UDFs. Apache Arrow asegura que los datos se muevan eficientemente entre Spark y Python.\n\nAWS | Azure | GCP\nApache Arrow",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-06",
        "identifier": "PE-02-06",
        "principle": "Diseñar cargas de trabajo para rendimiento",
        "title": "Usar motores nativos de la plataforma",
        "capabilities": "Photon",
        "details": "Photon es el motor en Databricks que proporciona rendimiento de consulta rápido a bajo costo – desde ingesta de datos, ETL, streaming, ciencia de datos y consultas interactivas – directamente en su data lake. Photon es compatible con las APIs de Apache Spark, así que comenzar es tan fácil como activarlo – sin cambios de código y sin lock-in.\n\nPhoton es parte de un runtime de alto rendimiento que ejecuta sus llamadas de API SQL y DataFrame existentes más rápido y reduce su costo total por carga de trabajo. Photon se usa por defecto en los SQL warehouses de Databricks.\nPhoton está disponible por defecto para todos los tipos de SQL Warehouse de Databricks.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-07",
        "identifier": "PE-02-07",
        "principle": "Diseñar cargas de trabajo para rendimiento",
        "title": "Entender su hardware y tipo de carga de trabajo",
        "capabilities": "Databricks Cluster Configuration",
        "details": "No todas las VMs de nube son creadas igualmente. Las diferentes familias de máquinas ofrecidas por los proveedores de nube son todas lo suficientemente diferentes como para importar. Hay diferencias obvias - RAM y cores - y diferencias más sutiles - tipo y generación de procesador, garantías de ancho de banda de red, y almacenamiento local de alta velocidad versus disco local versus disco remoto. También hay diferencias en los mercados \"spot\". Estos deben entenderse antes de decidir el mejor tipo de VM para su carga de trabajo.\n\nAWS | Azure | GCP\n\nPor favor note - La computación serverless gestiona clusters automáticamente, así que esto no es necesario para computación serverless.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-08",
        "identifier": "PE-02-08",
        "principle": "Diseñar cargas de trabajo para rendimiento",
        "title": "Usar caché",
        "capabilities": "Databricks Cluster Configuration",
        "details": "El caché de disco Delta (anteriormente conocido como \"caché DBIO\") acelera las lecturas de datos almacenando copias de archivos Parquet remotos en el almacenamiento local (SSD) de los nodos. Esta funcionalidad crea automáticamente una copia local de datos remotos a medida que se obtienen de la nube y es transparente para el usuario. El caché de disco Delta es particularmente útil para consultas que leen repetidamente un subconjunto particular de datos. Es mucho más rápido leer datos del disco local que leer datos remotos.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-09",
        "identifier": "PE-02-09",
        "principle": "Diseñar cargas de trabajo para rendimiento",
        "title": "Usar compactación",
        "capabilities": "Optimize with ZOrder",
        "details": "Delta Lake en Databricks puede mejorar la velocidad de lectura de consultas de una tabla. Una manera de mejorar esta velocidad es fusionar archivos pequeños en archivos más grandes. Activa la compactación ejecutando el comando OPTIMIZE. Vea Compact data files with optimize on Delta Lake.\n\nTambién puede compactar archivos pequeños automáticamente usando Auto Optimize. Vea Consider file size tuning.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-10",
        "identifier": "PE-02-10",
        "principle": "Diseñar cargas de trabajo para rendimiento",
        "title": "Usar data skipping",
        "capabilities": "Optimize with ZOrder",
        "details": "Data skipping: Para lograr esto, la información de data skipping se recopila automáticamente cuando escribe datos en una tabla Delta (por defecto Delta Lake en Databricks recopila estadísticas en las primeras 32 columnas definidas en el esquema de su tabla). Delta Lake en Databricks aprovecha esta información (valores mínimos y máximos) en el momento de la consulta para proporcionar consultas más rápidas. Vea Data skipping for Delta Lake.\n\nPara mejores resultados, aplique Z-ordering, una técnica para co-localizar información relacionada en el mismo conjunto de archivos. Esta co-localidad es usada automáticamente en Databricks por los algoritmos de data-skipping de Delta Lake. Este comportamiento reduce dramáticamente la cantidad de datos que Delta Lake en Databricks necesita leer.\n\nDynamic file pruning: El dynamic file pruning (DFP) puede mejorar significativamente el rendimiento de muchas consultas en tablas Delta. DFP es especialmente eficiente para tablas no particionadas o joins en columnas no particionadas.\n\nDelta Lake liquid clustering reemplaza particionamiento de tabla y ZORDER para simplificar decisiones de layout de datos y optimizar el rendimiento de consultas.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-11",
        "identifier": "PE-02-11",
        "principle": "Diseñar cargas de trabajo para rendimiento",
        "title": "Habilitar Predictive Optimization en su metastore",
        "capabilities": "Predictive Optimization",
        "details": "La predictive optimization elimina la necesidad de gestionar manualmente operaciones de mantenimiento para tablas Delta en Databricks.\n\nCon la predictive optimization habilitada, Databricks identifica automáticamente tablas que se beneficiarían de operaciones de mantenimiento y las ejecuta para el usuario. Las operaciones de mantenimiento solo se ejecutan cuando es necesario, eliminando tanto ejecuciones innecesarias para operaciones de mantenimiento como la carga asociada con el rastreo y solución de problemas de rendimiento.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-12",
        "identifier": "PE-02-12",
        "principle": "Diseñar cargas de trabajo para rendimiento",
        "title": "Evitar over-partitioning",
        "capabilities": "Partitioning",
        "details": "En el pasado, particionamiento era la manera más común de saltar datos. Sin embargo, particionamiento es estático y se manifiesta como una jerarquía de sistema de archivos. No hay manera fácil de cambiar particiones si los patrones de acceso cambian con el tiempo. Frecuentemente, particionamiento lleva a over-partitioning - en otras palabras, demasiadas particiones con archivos muy pequeños, lo que resulta en mal rendimiento de consultas. Vea Partitions.\n\nMientras tanto, una elección mucho mejor que particionamiento es Z-ordering.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-14",
        "identifier": "PE-02-14",
        "principle": "Diseñar cargas de trabajo para rendimiento",
        "title": "Considerar ajuste de tamaño de archivo",
        "capabilities": "Auto Optimize",
        "details": "El término auto optimize a veces se usa para describir funcionalidad controlada por las configuraciones delta.autoCompact y delta.optimizeWrite. Este término se ha retirado a favor de describir cada configuración individualmente. Vea Configure Delta Lake to control data file size.\n\nAuto Optimize es particularmente útil en los siguientes escenarios:\nCasos de uso de streaming donde latencia en el orden de minutos es aceptable.\nMERGE INTO es el método preferido de escribir en Delta Lake.\nCREATE TABLE AS SELECT o INSERT INTO son operaciones comúnmente usadas.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-15",
        "identifier": "PE-02-15",
        "principle": "Diseñar cargas de trabajo para rendimiento",
        "title": "Optimizar rendimiento de joins",
        "capabilities": "Databricks Adaptive Query Execution",
        "details": "Un range join ocurre cuando dos relaciones se unen usando una condición de punto en intervalo o superposición de intervalo. El soporte de optimización de range join en Databricks Runtime puede traer órdenes de magnitud de mejora en el rendimiento de consultas, pero requiere ajuste manual cuidadoso.\n\nAWS | Azure | GCP\n\nData skew es una condición en la que los datos de una tabla se distribuyen de manera desigual entre las particiones en el cluster. Data skew puede degradar severamente el rendimiento de consultas, especialmente aquellas con joins. Joins entre tablas grandes requieren shuffling de datos, y el skew puede llevar a un desequilibrio extremo de trabajo en el cluster.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-16",
        "identifier": "PE-02-16",
        "principle": "Diseñar cargas de trabajo para rendimiento",
        "title": "Ejecutar analyze table para recopilar estadísticas",
        "capabilities": "Analyze Table",
        "details": "Ejecute analyze table para recopilar estadísticas en toda la tabla para el plan de consulta.\nEsta información se persiste en el metastore y ayuda al optimizador de consultas:\n\nEligiendo el tipo de join adecuado.\nSeleccionando el lado de construcción correcto en un hash-join.\nCalibrando el orden de join en un join multi-way.\n\nDebe ejecutarse junto con OPTIMIZE diariamente y se recomienda en tablas < 5TB. La única advertencia es que analyze table no es incremental.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-03-01",
        "identifier": "PE-03-01",
        "principle": "Ejecutar pruebas de rendimiento",
        "title": "Probar con datos representativos de producción",
        "capabilities": null,
        "details": "Ejecute pruebas de rendimiento en datos de producción (solo lectura) o datos similares. Al usar datos similares, características como volumen, layout de archivo y data skews deben ser como datos de producción, ya que esto tiene un impacto significativo en el rendimiento.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-03-02",
        "identifier": "PE-03-02",
        "principle": "Ejecutar pruebas de rendimiento",
        "title": "Tomar en cuenta prewarming de recursos",
        "capabilities": "Databricks Pools",
        "details": "Tomar en cuenta prewarming de recursos\nLa primera consulta en un nuevo cluster es más lenta que todas las demás:\n\nEn general, los recursos del cluster necesitan inicializarse en múltiples capas.\n\nCuando caching es parte de la configuración, la primera ejecución asegura que los datos estén en el caché, lo que acelera trabajos subsiguientes.\n\nPrewarming de recursos - ejecutar consultas específicas para inicializar recursos y llenar cachés (por ejemplo, después de un reinicio de cluster) - puede aumentar significativamente el rendimiento de las primeras consultas. Entonces, para entender el comportamiento para los diferentes escenarios, pruebe el rendimiento de la primera ejecución (con y sin prewarming) y ejecuciones subsiguientes.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-03-03",
        "identifier": "PE-03-03",
        "principle": "Ejecutar pruebas de rendimiento",
        "title": "Identificar cuellos de botella",
        "capabilities": null,
        "details": "Los cuellos de botella son áreas en su carga de trabajo que podrían empeorar el rendimiento general cuando la carga en producción aumenta. Identificar estos en el momento del diseño y probar contra cargas más altas ayudará a mantener las cargas de trabajo estables en producción.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-04-01",
        "identifier": "PE-04-01",
        "principle": "Monitorear rendimiento",
        "title": "Monitorear rendimiento de consultas",
        "capabilities": null,
        "details": "Query Profile: Utilice la característica de query profile para solucionar cuellos de botella de rendimiento durante la ejecución de una consulta. Proporciona visualización de cada tarea de consulta y métricas relacionadas como tiempo gastado, número de filas procesadas y consumo de memoria.\n\nSQL Warehouse Monitoring: Monitoree SQL warehouses visualizando estadísticas en vivo, gráficos de conteo de pico de consultas, gráficos de clusters en ejecución y tabla de historial de consultas.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-04-02",
        "identifier": "PE-04-02",
        "principle": "Monitorear rendimiento",
        "title": "Monitorear cargas de trabajo de streaming",
        "capabilities": null,
        "details": "Structured Streaming Monitoring: Para consultas de streaming, use el monitoreo integrado en la Spark UI bajo la pestaña Streaming o envíe métricas a servicios externos usando la interfaz Streaming Query Listener de Apache Spark.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-04-03",
        "identifier": "PE-04-03",
        "principle": "Monitorear rendimiento",
        "title": "Monitorear rendimiento de trabajos",
        "capabilities": null,
        "details": "Visualice y gestione ejecuciones de trabajos a través de la UI de Databricks, que proporciona detalles sobre salida del trabajo, logs, métricas y el éxito o fallo de cada tarea en la ejecución del trabajo.",
        "type": "status",
        "status": "open"
      }
    ]
  },
  {
    "id": "cost-optimization",
    "name": "Optimización de Costos",
    "description": "Maximizar valor mientras minimiza costos a través de gestión eficiente de recursos.",
    "questions": [
      {
        "id": "CO-01-01",
        "identifier": "CO-01-01",
        "principle": "Elegir recursos óptimos",
        "title": "Usar formatos de datos optimizados para rendimiento",
        "capabilities": "Delta Lake",
        "details": "Delta Lake es una capa de almacenamiento open-source que mejora los data lakes proporcionando transacciones ACID, manejo escalable de metadatos y aplicación de esquema, construida principalmente sobre Apache Spark y Parquet. Soporta una arquitectura lakehouse, permitiendo integración con varios motores de computación y lenguajes de programación. Delta Lake ofrece optimizaciones significativas de rendimiento como data skipping, indexación y técnicas de gestión de archivos como compactación y Z-Ordering. Adicionalmente, incluye características como time travel para versionado de datos y Delta Live Tables para gestionar pipelines de datos batch y streaming eficientemente. Estas capacidades hacen que Delta Lake sea adecuado para manejar cargas de trabajo transaccionales a gran escala y análisis en tiempo real, garantizando integridad y consistencia de datos en diversos escenarios de gestión de datos.\nBlog",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-02",
        "identifier": "CO-01-02",
        "principle": "Elegir recursos óptimos",
        "title": "Usar job clusters",
        "capabilities": "Databricks Workflows",
        "details": "Un job es una forma de ejecutar código no interactivo en un cluster de Databricks. Por ejemplo, puede ejecutar una carga de trabajo de extracción, transformación y carga (ETL) interactivamente o en una programación. Por supuesto, también puede ejecutar jobs interactivamente en la interfaz de notebook. Sin embargo, en job clusters, las cargas de trabajo no interactivas costarán significativamente menos que en clusters de propósito general.\nUna ventaja adicional es que cada job o workflow se ejecuta en un nuevo cluster, aislando cargas de trabajo unas de otras.\n\nAWS | Azure | GCP\nPricing",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-03",
        "identifier": "CO-01-03",
        "principle": "Elegir recursos óptimos",
        "title": "Usar SQL warehouse para cargas de trabajo SQL",
        "capabilities": "Databricks Serverless SQL",
        "details": "Para cargas de trabajo SQL interactivas, un Databricks SQL warehouse es el motor más eficiente en costos.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-04",
        "identifier": "CO-01-04",
        "principle": "Elegir recursos óptimos",
        "title": "Usar runtimes actualizados para sus cargas de trabajo",
        "capabilities": "Databricks Cluster Configuration",
        "details": "La plataforma Databricks proporciona diferentes runtimes que están optimizados para tareas de ingeniería de datos (Databricks Runtime) o para Machine Learning (Databricks Runtime for Machine Learning). Los runtimes están construidos para proporcionar la mejor selección de bibliotecas para las tareas y asegurar que todas las bibliotecas proporcionadas estén actualizadas y funcionen juntas de manera óptima. Databricks Runtime se lanza en una cadencia regular y ofrece mejoras de rendimiento entre releases principales. Estas mejoras en rendimiento a menudo llevan a ahorro de costos debido al uso más eficiente de recursos de cluster.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-05",
        "identifier": "CO-01-05",
        "principle": "Elegir recursos óptimos",
        "title": "Usar GPUs solo para las cargas de trabajo correctas",
        "capabilities": "Databricks Cluster Configuration",
        "details": "Las máquinas virtuales con GPUs pueden acelerar dramáticamente procesos computacionales para deep learning, pero tienen un precio significativamente más alto que las máquinas solo con CPU. Use instancias GPU solo para cargas de trabajo que tienen bibliotecas aceleradas por GPU.\nLa mayoría de las cargas de trabajo no usan bibliotecas aceleradas por GPU y no se benefician de instancias habilitadas para GPU. Los administradores de workspace pueden restringir máquinas y clusters GPU para evitar uso innecesario.\n\nAWS | Azure | GCP\nBlog",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-06",
        "identifier": "CO-01-06",
        "principle": "Elegir recursos óptimos",
        "title": "Usar Serverless para sus cargas de trabajo",
        "capabilities": "Databricks Serverless",
        "details": "Las cargas de trabajo de BI típicamente usan datos en ráfagas y generan múltiples consultas simultáneas. Por ejemplo, alguien usando una herramienta de BI podría actualizar un dashboard, escribir una consulta o simplemente analizar resultados de consultas sin interactuar más con la plataforma. Este ejemplo demuestra dos requisitos:\n\nTerminar clusters durante períodos ociosos para ahorrar costos.\nTener recursos de cómputo disponibles rápidamente (tanto para inicio como para scale-up) para satisfacer consultas de usuarios cuando solicitan datos nuevos o actualizados con la herramienta de BI.\n\nSQL warehouses serverless inician y escalan en segundos, así que tanto disponibilidad inmediata como terminación durante tiempos ociosos pueden lograrse. Esto resulta en una gran experiencia de usuario y ahorro general de costos.\nAdicionalmente, SQL warehouses serverless reducen más temprano que warehouses no-serverless, resultando en costos menores.\n\nAWS | Azure | GCP\n\nDatabricks Model Serving proporciona una interfaz unificada para desplegar, gobernar y consultar modelos de IA. Cada modelo que sirve está disponible como una API REST que puede integrar en su aplicación web o cliente.\n\nModel Serving proporciona un servicio de alta disponibilidad y baja latencia para despliegue de modelos. El servicio escala automáticamente para satisfacer cambios en la demanda, ahorrando costos de infraestructura mientras optimiza el rendimiento de latencia. Esta funcionalidad usa cómputo serverless.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-07",
        "identifier": "CO-01-07",
        "principle": "Elegir recursos óptimos",
        "title": "Usar el tipo de instancia correcto",
        "capabilities": "Databricks Cluster Configuration",
        "details": "Basándose en sus cargas de trabajo, también es importante elegir la familia de instancias correcta para obtener la mejor relación rendimiento/precio. Algunas reglas simples son:\nOptimizado para memoria para ML, cargas de trabajo con heavy shuffle & spill\nOptimizado para cómputo para cargas de trabajo de Structured Streaming, trabajos de mantenimiento (ej. Optimize & Vacuum)\nOptimizado para almacenamiento para cargas de trabajo que se benefician de caching, ej. análisis de datos ad-hoc e interactivo\nOptimizado para GPU para cargas de trabajo específicas de ML & DL\nPropósito general en ausencia de requisitos específicos",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-08",
        "identifier": "CO-01-08",
        "principle": "Elegir recursos óptimos",
        "title": "Elegir el tamaño de cluster más eficiente",
        "capabilities": "Databricks Cluster Configuration",
        "details": "Número de workers, tipo de instancia y tamaño son factores importantes para configuraciones de cómputo. Junto con esos, al dimensionar cómputo, considere los datos consumidos, complejidad computacional, particionamiento de datos y paralelismo requerido. Para cargas de trabajo ETL simples, enfóquese en configuraciones optimizadas para cómputo, mientras que memoria y almacenamiento son importantes para cargas de trabajo con heavy shuffle. Balancear el número de workers y el tamaño de la instancia es crucial, ya que ambos pueden afectar I/O de red. Por último, considere los beneficios de caching para cargas de trabajo que requieren relecturas frecuentes de los mismos datos, usando configuraciones optimizadas para almacenamiento con Delta Cache.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-09",
        "identifier": "CO-01-09",
        "principle": "Elegir recursos óptimos",
        "title": "Evaluar motores de consulta optimizados para rendimiento",
        "capabilities": "Databricks Cluster Configuration",
        "details": "Photon es un motor de consulta vectorizado nativo de Databricks de alto rendimiento que acelera sus cargas de trabajo SQL y llamadas de API DataFrame (para ingestión de datos, ETL, streaming, ciencia de datos y consultas interactivas). Photon es compatible con APIs de Apache Spark, así que comenzar es tan fácil como encenderlo – sin cambios de código y sin lock-in.\nLa aceleración observada puede llevar a ahorro de costos significativo, y trabajos que corren regularmente deben evaluarse para ver si no son solo más rápidos, sino también más baratos con Photon.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-02-01",
        "identifier": "CO-02-01",
        "principle": "Asignar recursos dinámicamente",
        "title": "Aprovechar cómputo con auto-scaling",
        "capabilities": "Databricks Cluster Configuration",
        "details": "Auto-scaling permite que sus cargas de trabajo usen la cantidad correcta de cómputo requerida para completar sus trabajos.\n\nHabilite auto-scaling para cargas de trabajo batch.\nHabilite auto-scaling para SQL warehouse.\nAWS | Azure | GCP\n\nAuto-scaling de cómputo tiene limitaciones al reducir el tamaño del cluster para cargas de trabajo de Structured Streaming. Databricks recomienda usar Delta Live Tables con Enhanced Autoscaling para cargas de trabajo de streaming.\nUse Delta Live Tables Enhanced Autoscaling.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-02-02",
        "identifier": "CO-02-02",
        "principle": "Asignar recursos dinámicamente",
        "title": "Usar terminación automática",
        "capabilities": "Databricks Cluster Configuration",
        "details": "Databricks proporciona varios recursos para ayudar a controlar costos reduciendo recursos ociosos y controlando cuándo se pueden desplegar recursos de cómputo.\nConfigure terminación automática para todos los clusters interactivos. Después de un tiempo ocioso especificado, el cluster se apaga. Vea Automatic termination.\n\nSi un tiempo de inicio significativamente menor que un inicio completo de cluster sería aceptable, considere usar pools de cluster. Vea Pool best practices. Los pools de Databricks reducen los tiempos de inicio y auto-scaling de cluster manteniendo un conjunto de instancias ociosas y listas para usar. Cuando un cluster se adjunta a un pool, los nodos del cluster se crean usando las instancias ociosas del pool. Si el pool no tiene instancias ociosas, el pool se expande asignando una nueva instancia del proveedor de instancias para acomodar la solicitud del cluster. Cuando un cluster libera una instancia, regresa al pool y queda libre para que otro cluster la use.\nDatabricks no cobra DBUs mientras las instancias están ociosas en el pool, resultando en ahorro de costos. La facturación del proveedor de instancias sí aplica.\n\nAWS | Azure | GCP\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-02-03",
        "identifier": "CO-02-03",
        "principle": "Asignar recursos dinámicamente",
        "title": "Usar políticas de cómputo para controlar costos",
        "capabilities": "Databricks Cluster Policies",
        "details": "Las políticas de cluster pueden aplicar muchas restricciones específicas de costo para clusters. Vea Operational Excellence - Use cluster policies. Por ejemplo:\n\nHabilite auto-scaling de cluster con un número mínimo establecido de nodos worker.\nHabilite terminación automática de cluster con un valor razonable (por ejemplo, 1 hora) para evitar pagar por tiempos ociosos.\nAsegúrese de que solo se puedan seleccionar instancias de VM eficientes en costos. Siga las mejores prácticas para configuración de cluster. Vea Compute configuration best practices.\nAplique una estrategia de instancia spot.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-03-01",
        "identifier": "CO-03-01",
        "principle": "Monitorear y controlar costos",
        "title": "Monitorear costos",
        "capabilities": "Unity Catalog",
        "details": "La consola de cuenta permite ver el uso facturable. Como propietario o administrador de cuenta de Databricks, también puede usar la consola de cuenta para descargar logs de uso facturable. Las tablas de sistema de Databricks proporcionan detalles de uso detallados con tablas de sistema que puede usar para monitorear uso.\n\nComo mejor práctica, los costos completos (incluidas VMs, almacenamiento e infraestructura de red) deben monitorearse. Esto se puede lograr mediante herramientas de gestión de costos del proveedor de nube o agregando herramientas de terceros.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-03-02",
        "identifier": "CO-03-02",
        "principle": "Monitorear y controlar costos",
        "title": "Etiquetar clusters para atribución de costos",
        "capabilities": "Databricks Cluster Configuration",
        "details": "Para monitorear costos y atribuir con precisión el uso de Databricks a las unidades de negocio y equipos de su organización (por ejemplo, para chargebacks), puede etiquetar clusters y pools. Estas etiquetas se propagan a reportes detallados de uso de DBU y a VMs e instancias de blob storage del proveedor de nube para análisis de costos.\n\nAsegúrese de que el control de costos y la atribución ya estén en mente al configurar workspaces y clusters para equipos y casos de uso. Esto simplifica el etiquetado y mejora la precisión de las atribuciones de costo.\n\nPara los costos generales, DBU, máquina virtual, disco y cualquier costo de red asociado deben considerarse. Para SQL warehouses serverless esto es más simple ya que los costos de DBU ya incluyen costos de máquina virtual y disco.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-03-03",
        "identifier": "CO-03-03",
        "principle": "Monitorear y controlar costos",
        "title": "Implementar observabilidad para rastrear y cobrar costos",
        "capabilities": "Databricks Cluster Configuration",
        "details": "Al trabajar con ecosistemas técnicos complejos, entender proactivamente las incógnitas es clave para mantener la estabilidad de la plataforma y controlar costos. Observabilidad proporciona una manera de analizar y optimizar sistemas basándose en los datos que generan. Esto es diferente de monitoreo, que se enfoca en identificar nuevos patrones en lugar de rastrear problemas conocidos.\nDatabricks proporciona grandes capacidades de observabilidad usando System tables que son almacenes analíticos hospedados por Databricks de los datos operacionales de una cuenta de cliente encontrados en el catálogo de sistema. Proporcionan observabilidad histórica en toda la cuenta e incluyen información tabular amigable sobre telemetría de la plataforma.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-03-04",
        "identifier": "CO-03-04",
        "principle": "Monitorear y controlar costos",
        "title": "Compartir reportes de costos regularmente",
        "capabilities": "Unity Catalog - System Tables",
        "details": "Cree reportes de costos cada mes para rastrear crecimiento y anomalías en consumo. Comparta estos reportes detallados por casos de uso o equipos con los equipos que poseen las respectivas cargas de trabajo usando etiquetado de cluster. Esto evita sorpresas y permite a los equipos adaptar proactivamente sus cargas de trabajo si los costos se vuelven muy altos.\n\nUse la consola de cuenta para obtener uso de alto nivel - AWS | Azure | GCP\n\nDatabricks recomienda usar tablas de sistema de Unity Catalog para generar reportes de uso detallados (por etiquetas de uso, etc) para reportes de costos mejorados.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-03-05",
        "identifier": "CO-03-05",
        "principle": "Monitorear y controlar costos",
        "title": "Monitorear y gestionar costos de egress de Delta Sharing",
        "capabilities": "System Tables",
        "details": "A diferencia de otras plataformas de compartición de datos, Delta Sharing no requiere replicación de datos. Este modelo tiene muchas ventajas, pero significa que su proveedor de nube puede cobrar tarifas de egress de datos cuando comparte datos entre nubes o regiones. Vea Monitor and manage Delta Sharing egress costs (for providers) para monitorear y gestionar cargos de egress.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-04-01",
        "identifier": "CO-04-01",
        "principle": "Diseñar cargas de trabajo eficientes en costos",
        "title": "Equilibrar streaming always-on y disparado por trigger",
        "capabilities": "Databricks Streaming",
        "details": "Tradicionalmente, cuando la gente piensa en streaming, términos como \"tiempo real\", \"24/7\" o \"always on\" vienen a la mente. Si la ingesta de datos ocurre en \"tiempo real\", el cluster subyacente necesita ejecutarse 24/7, produciendo costos de consumo cada hora del día.\n\nSin embargo, no todos los casos de uso basados en un flujo continuo de eventos necesitan que estos eventos se agreguen al conjunto de datos analíticos inmediatamente. Si el requisito de negocio para el caso de uso solo necesita datos frescos cada pocas horas o cada día, entonces este requisito puede lograrse con solo varias ejecuciones por día, llevando a una reducción significativa de costos para la carga de trabajo. Databricks recomienda usar Structured Streaming con trigger AvailableNow para cargas de trabajo incrementales que no tienen requisitos de baja latencia. Vea Configuring incremental batch processing.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-04-02",
        "identifier": "CO-04-02",
        "principle": "Diseñar cargas de trabajo eficientes en costos",
        "title": "Equilibrar entre instancias on-demand y de capacidad excedente",
        "capabilities": "Databricks Cluster Configuration",
        "details": "Las instancias spot usan recursos excedentes de máquinas virtuales de nube que están disponibles a un precio más barato. Para ahorrar costos, Databricks soporta crear clusters usando instancias spot. Se recomienda siempre tener la primera instancia (driver Spark) como una máquina virtual on-demand. Las instancias spot son una gran selección para cargas de trabajo cuando es aceptable tardar más porque una o más instancias spot han sido desalojadas por el proveedor de nube.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      }
    ]
  }
];
