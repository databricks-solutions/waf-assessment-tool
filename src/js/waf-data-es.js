/**
 * WAF Assessment Questions - Spanish Translation
 * Todas las preguntas y detalles traducidos al Español
 */

const WAF_PILLARS_DATA = [
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
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-01-02",
        "identifier": "IU-01-02",
        "principle": "Definir estándares para integración",
        "title": "Usar conectores optimizados para ingerir fuentes de datos en el lakehouse",
        "capabilities": "Lakehouse Federation",
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-01-03",
        "identifier": "IU-01-03",
        "principle": "Definir estándares para integración",
        "title": "Usar herramientas de socios certificados",
        "capabilities": "Databricks Partner Connect",
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-01-04",
        "identifier": "IU-01-04",
        "principle": "Definir estándares para integración",
        "title": "Reducir complejidad de pipelines de ingeniería de datos",
        "capabilities": "Delta Live Tables; Autoloader",
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-02-01",
        "identifier": "IU-02-01",
        "principle": "Utilizar interfaces y formatos de datos abiertos",
        "title": "Usar formatos de datos abiertos",
        "capabilities": "Delta Lake",
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-02-02",
        "identifier": "IU-02-02",
        "principle": "Utilizar interfaces y formatos de datos abiertos",
        "title": "Habilitar compartición segura de datos para todos los activos",
        "capabilities": "Delta Sharing",
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-02-03",
        "identifier": "IU-02-03",
        "principle": "Utilizar interfaces y formatos de datos abiertos",
        "title": "Usar estándares abiertos para flujos de trabajo de IA",
        "capabilities": "MLFlow",
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-03-01",
        "identifier": "IU-03-01",
        "principle": "Simplificar implementación de nuevos casos de uso",
        "title": "Proporcionar experiencia de autoservicio en toda la plataforma",
        "capabilities": "Databricks Data Intelligence Platform",
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-03-02",
        "identifier": "IU-03-02",
        "principle": "Simplificar implementación de nuevos casos de uso",
        "title": "Usar servicios serverless",
        "capabilities": "Databricks Serverless SQL;\nServerless Workflows;\nServerless Notebooks",
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-03-03",
        "identifier": "IU-03-03",
        "principle": "Simplificar implementación de nuevos casos de uso",
        "title": "Usar plantillas de cómputo predefinidas",
        "capabilities": "Databricks Cluster Policies",
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-03-04",
        "identifier": "IU-03-04",
        "principle": "Simplificar implementación de nuevos casos de uso",
        "title": "Usar capacidades de IA para aumentar productividad",
        "capabilities": "Databricks Assistant",
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-04-01",
        "identifier": "IU-04-01",
        "principle": "Asegurar consistencia y usabilidad de datos",
        "title": "Ofrecer datos como productos reutilizables confiables",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-04-02",
        "identifier": "IU-04-02",
        "principle": "Asegurar consistencia y usabilidad de datos",
        "title": "Publicar productos de datos semánticamente consistentes",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-04-03",
        "identifier": "IU-04-03",
        "principle": "Asegurar consistencia y usabilidad de datos",
        "title": "Proporcionar catálogo central para descubrimiento y linaje",
        "capabilities": "Unity Catalog",
        "details": null,
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
        "title": "Usar Unity Catalog para gestión del ciclo de vida de modelos",
        "capabilities": "Unity Catalog",
        "details": null,
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
        "principle": "Implementar modelo de seguridad en capas",
        "title": "Implementar seguridad de defensa en profundidad",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-02",
        "identifier": "SCP-01-02",
        "principle": "Implementar modelo de seguridad en capas",
        "title": "Usar autenticación multifactor",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-03",
        "identifier": "SCP-01-03",
        "principle": "Implementar modelo de seguridad en capas",
        "title": "Implementar control de acceso basado en roles",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-04",
        "identifier": "SCP-01-04",
        "principle": "Implementar modelo de seguridad en capas",
        "title": "Usar cifrado de datos en reposo y en tránsito",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-05",
        "identifier": "SCP-01-05",
        "principle": "Implementar modelo de seguridad en capas",
        "title": "Implementar segmentación de red",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-06",
        "identifier": "SCP-01-06",
        "principle": "Implementar modelo de seguridad en capas",
        "title": "Usar gestión de secretos",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-07",
        "identifier": "SCP-01-07",
        "principle": "Implementar modelo de seguridad en capas",
        "title": "Implementar políticas de seguridad de datos",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-08",
        "identifier": "SCP-01-08",
        "principle": "Implementar modelo de seguridad en capas",
        "title": "Habilitar registro de auditoría",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-09",
        "identifier": "SCP-01-09",
        "principle": "Implementar modelo de seguridad en capas",
        "title": "Realizar evaluaciones de seguridad regulares",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-10",
        "identifier": "SCP-01-10",
        "principle": "Implementar modelo de seguridad en capas",
        "title": "Implementar protección DDoS",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-11",
        "identifier": "SCP-01-11",
        "principle": "Implementar modelo de seguridad en capas",
        "title": "Usar inicio de sesión único (SSO)",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-12",
        "identifier": "SCP-01-12",
        "principle": "Implementar modelo de seguridad en capas",
        "title": "Implementar gestión de acceso privilegiado",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-13",
        "identifier": "SCP-01-13",
        "principle": "Implementar modelo de seguridad en capas",
        "title": "Usar tokens de acceso seguros",
        "capabilities": null,
        "details": null,
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
        "title": "Implementar redundancia",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-01-02",
        "identifier": "R-01-02",
        "principle": "Diseñar para tolerancia a fallos",
        "title": "Usar almacenamiento de datos resiliente",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-01-03",
        "identifier": "R-01-03",
        "principle": "Diseñar para tolerancia a fallos",
        "title": "Implementar puntos de control y reintentos",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-01-04",
        "identifier": "R-01-04",
        "principle": "Diseñar para tolerancia a fallos",
        "title": "Diseñar trabajos idempotentes",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-01-05",
        "identifier": "R-01-05",
        "principle": "Diseñar para tolerancia a fallos",
        "title": "Implementar circuit breakers para servicios ML",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-01-06",
        "identifier": "R-01-06",
        "principle": "Diseñar para tolerancia a fallos",
        "title": "Usar manejo de errores apropiado",
        "capabilities": null,
        "details": null,
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
        "principle": "Seleccionar recursos apropiados",
        "title": "Elegir tipos de cómputo apropiados",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-01-02",
        "identifier": "PE-01-02",
        "principle": "Seleccionar recursos apropiados",
        "title": "Usar GPU para cargas de trabajo de ML",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-01",
        "identifier": "PE-02-01",
        "principle": "Optimizar procesamiento de datos",
        "title": "Usar formato de datos eficiente",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-02",
        "identifier": "PE-02-02",
        "principle": "Optimizar procesamiento de datos",
        "title": "Implementar particionamiento de datos",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-03",
        "identifier": "PE-02-03",
        "principle": "Optimizar procesamiento de datos",
        "title": "Usar compactación de archivos pequeños",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-04",
        "identifier": "PE-02-04",
        "principle": "Optimizar procesamiento de datos",
        "title": "Implementar caché de datos",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-05",
        "identifier": "PE-02-05",
        "principle": "Optimizar procesamiento de datos",
        "title": "Usar procesamiento incremental",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-06",
        "identifier": "PE-02-06",
        "principle": "Optimizar procesamiento de datos",
        "title": "Optimizar consultas SQL",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-07",
        "identifier": "PE-02-07",
        "principle": "Optimizar procesamiento de datos",
        "title": "Usar Photon para aceleración de consultas",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-08",
        "identifier": "PE-02-08",
        "principle": "Optimizar procesamiento de datos",
        "title": "Implementar vistas materializadas",
        "capabilities": null,
        "details": null,
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
        "principle": "Implementar gobernanza de costos",
        "title": "Establecer presupuestos y alertas",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-02",
        "identifier": "CO-01-02",
        "principle": "Implementar gobernanza de costos",
        "title": "Implementar etiquetado de recursos",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-03",
        "identifier": "CO-01-03",
        "principle": "Implementar gobernanza de costos",
        "title": "Usar reportes de costos",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-04",
        "identifier": "CO-01-04",
        "principle": "Implementar gobernanza de costos",
        "title": "Establecer políticas de retención de datos",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-05",
        "identifier": "CO-01-05",
        "principle": "Implementar gobernanza de costos",
        "title": "Revisar y optimizar costos regularmente",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-02-01",
        "identifier": "CO-02-01",
        "principle": "Optimizar uso de cómputo",
        "title": "Usar auto-escalado",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-02-02",
        "identifier": "CO-02-02",
        "principle": "Optimizar uso de cómputo",
        "title": "Usar instancias spot/preemptibles",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-02-03",
        "identifier": "CO-02-03",
        "principle": "Optimizar uso de cómputo",
        "title": "Implementar terminación automática de clústeres",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-03-01",
        "identifier": "CO-03-01",
        "principle": "Optimizar costos de almacenamiento",
        "title": "Usar niveles de almacenamiento apropiados",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-03-02",
        "identifier": "CO-03-02",
        "principle": "Optimizar costos de almacenamiento",
        "title": "Implementar gestión del ciclo de vida de datos",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-03-03",
        "identifier": "CO-03-03",
        "principle": "Optimizar costos de almacenamiento",
        "title": "Usar compresión de datos",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-04-01",
        "identifier": "CO-04-01",
        "principle": "Optimizar transferencia de datos",
        "title": "Minimizar transferencia de datos entre regiones",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-04-02",
        "identifier": "CO-04-02",
        "principle": "Optimizar transferencia de datos",
        "title": "Usar procesamiento de datos localizado",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      }
    ]
  }
];
