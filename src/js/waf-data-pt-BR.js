/**
 * WAF Assessment Questions - Portuguese (Brazil) Translation
 * Todas as perguntas e detalhes traduzidos para Português do Brasil
 */

export const WAF_PILLARS_DATA = [
  {
    "id": "data-ai-governance",
    "name": "Governança de Dados e IA",
    "description": "Garanta que os dados agreguem valor e apoiem a estratégia de negócios mantendo qualidade e conformidade.",
    "questions": [
      {
        "id": "DG-01-01",
        "identifier": "DG-01-01",
        "principle": "Unificar gestão de dados e IA",
        "title": "Estabelecer processo de governança de dados",
        "capabilities": null,
        "details": "Governança de dados é o gerenciamento da disponibilidade, usabilidade, integridade e segurança dos dados de uma organização. Ao fortalecer a governança de dados, as organizações podem garantir a qualidade dos dados críticos para análise e tomada de decisão precisas, ajudando a identificar novas oportunidades, melhorar a satisfação do cliente e, em última análise, aumentar a receita. Isso ajuda as organizações a cumprir regulamentações de privacidade de dados e melhorar medidas de segurança, reduzindo o risco de violações de dados e penalidades.\nA governança de dados eficaz também elimina redundâncias e otimiza o gerenciamento de dados, resultando em economia de custos e maior eficiência operacional.\nTópicos a abordar com governança de dados incluem:\n- Propriedade dos dados, funções e responsabilidades\n- Políticas e procedimentos para orientar qualidade, privacidade, segurança e conformidade dos dados\n- Qualidade dos dados para garantir precisão, completude e confiabilidade\n- Segurança e conformidade dos dados\n- Arquitetura e integração de dados\n- Gestão de metadados para garantir que os dados sejam bem compreendidos\nO Unity Catalog está no centro da Plataforma de Inteligência de Dados da Databricks e ajuda em muitos aspectos da governança de dados, desde gestão de metadados, linhagem até controle de acesso.\nAWS | AZURE | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-01-02",
        "identifier": "DG-01-02",
        "principle": "Unificar gestão de dados e IA",
        "title": "Gerenciar metadados de todos os ativos de dados em um único lugar",
        "capabilities": "Unity Catalog",
        "details": "Os benefícios de gerenciar todos os metadados em um único lugar são semelhantes aos benefícios de manter uma única fonte de verdade para todos os seus dados. Isso inclui redundância de dados reduzida, maior integridade dos dados e evitar mal-entendidos baseados em diferentes definições ou taxonomias. Também é mais fácil implementar políticas, padrões e regras globais ao lidar com uma única fonte.\n\nComo melhor prática, execute o lakehouse em uma única conta com um Unity Catalog. O contêiner de nível superior de objetos no Unity Catalog é um metastore. Ele armazena ativos de dados (como tabelas e views) e as permissões que governam o acesso a eles. Use um único metastore por região de nuvem e não acesse metastores entre regiões para evitar problemas de latência.\nAWS | Azure | GCP\n\nA Databricks recomenda usar catálogos para fornecer segregação em toda a arquitetura de informações da sua organização. Frequentemente, isso significa que os catálogos podem corresponder ao escopo do ambiente de desenvolvimento de software, equipe ou unidade de negócios.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-01-03",
        "identifier": "DG-01-03",
        "principle": "Unificar gestão de dados e IA",
        "title": "Rastrear linhagem de dados e IA para impulsionar a visibilidade",
        "capabilities": "Unity Catalog",
        "details": "A linhagem de dados é uma ferramenta poderosa que ajuda líderes de dados a impulsionar maior visibilidade e compreensão dos dados em suas organizações. Ela descreve a transformação e refinamento dos dados da fonte até o insight. A linhagem inclui a captura de todos os metadados relevantes e eventos associados aos dados em seu ciclo de vida, incluindo a fonte do conjunto de dados, quais outros conjuntos de dados foram usados para criá-lo, quem o criou e quando, quais transformações foram realizadas, quais outros conjuntos de dados o usam e muitos outros eventos e atributos. A linhagem de dados pode ser usada para muitos casos de uso relacionados a dados:\n\n- Conformidade e prontidão para auditoria: A linhagem de dados ajuda organizações a rastrear a fonte de tabelas e campos. Isso é importante para atender aos requisitos de muitas regulamentações de conformidade, como GDPR, CCPA, HIPAA, BCBS 239 e SOX.\n\n- Análise de impacto/gestão de mudanças: Os dados passam por múltiplas transformações da fonte até a tabela final pronta para o negócio. Compreender o impacto potencial das mudanças de dados nos usuários downstream torna-se importante da perspectiva de gestão de riscos.\n\n- Garantia de qualidade de dados: Entender de onde um conjunto de dados veio e quais transformações foram aplicadas fornece um contexto muito melhor para cientistas e analistas de dados.\n\n- Depuração e diagnósticos: No caso de um resultado inesperado, a linhagem de dados ajuda equipes de dados a realizar análise de causa raiz rastreando o erro até sua fonte.\n\nO Unity Catalog captura linhagem de dados em tempo de execução em consultas executadas no Databricks. A linhagem é suportada para todas as linguagens e é capturada até o nível de coluna.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-01-04",
        "identifier": "DG-01-04",
        "principle": "Unificar gestão de dados e IA",
        "title": "Adicionar descrições consistentes aos seus metadados",
        "capabilities": "Databricks IQ; Unity Catalog",
        "details": "Enriquecer metadados com comentários pode ajudar a acelerar processos...\n\nComentários gerados por IA são destinados a fornecer uma descrição geral de tabelas e colunas com base no esquema. As descrições são ajustadas para dados em um contexto empresarial, usando esquemas de exemplo de vários conjuntos de dados abertos em diversas indústrias. O modelo foi avaliado com centenas de amostras simuladas para verificar que evita gerar descrições prejudiciais ou inapropriadas.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-01-05",
        "identifier": "DG-01-05",
        "principle": "Unificar gestão de dados e IA",
        "title": "Permitir descoberta fácil de dados para consumidores",
        "capabilities": "Unity Catalog",
        "details": "A descoberta fácil de dados permite que cientistas de dados, analistas de dados e engenheiros de dados descubram e referenciem rapidamente dados relevantes e acelerem o tempo para valor.\n\nO Databricks Catalog Explorer fornece uma interface para explorar e gerenciar dados, esquemas (bancos de dados), tabelas e permissões, proprietários de dados, locais externos e credenciais. Além disso, você pode usar a aba Insights no Catalog Explorer para visualizar as consultas e usuários mais frequentes de qualquer tabela registrada no Unity Catalog.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-01-06",
        "identifier": "DG-01-06",
        "principle": "Unificar gestão de dados e IA",
        "title": "Governar ativos de IA junto com os dados",
        "capabilities": "Unity Catalog",
        "details": "Governar todos os seus ativos de IA é importante porque garante visibilidade e controle unificados sobre dados e ativos de IA, o que é crucial para manter a qualidade, segurança e conformidade dos dados em diferentes plataformas e nuvens. Essa governança facilita o gerenciamento de políticas de acesso de forma consistente e eficiente, aprimorando a inteligência operacional e garantindo que os sistemas de IA operem dentro das diretrizes regulatórias e requisitos de negócios.\nCom o Unity Catalog, as organizações podem implementar um framework de governança unificado para seus dados estruturados e não estruturados, modelos de machine learning, notebooks, features, funções e arquivos, aprimorando a segurança e conformidade em nuvens e plataformas.\nAWS | Azure | GCP\n\nAliases de modelo em fluxos de trabalho de machine learning permitem atribuir uma referência nomeada e mutável a uma versão específica de um modelo registrado. Essa funcionalidade é benéfica para rastrear e gerenciar diferentes estágios do ciclo de vida de um modelo.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-02-01",
        "identifier": "DG-02-01",
        "principle": "Unificar segurança de dados e IA",
        "title": "Centralizar controle de acesso para todos os ativos de dados e IA",
        "capabilities": "Unity Catalog",
        "details": "Centralizar o controle de acesso para todos os ativos de dados é importante porque simplifica a segurança e governança dos seus ativos de dados e IA, fornecendo um local central para administrar e auditar o acesso a esses ativos. Essa abordagem ajuda a gerenciar o acesso a objetos de dados e IA de forma mais eficiente, garantindo que os requisitos operacionais em torno da segregação de funções sejam aplicados, o que é crucial para conformidade regulatória e mitigação de riscos.\n\nO Databricks fornece acesso a logs de auditoria das atividades realizadas pelos usuários, permitindo que sua empresa monitore padrões detalhados de uso do Databricks. Existem dois tipos de logs: logs de auditoria no nível do workspace com eventos no nível do workspace e logs de auditoria no nível da conta com eventos no nível da conta.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-02-02",
        "identifier": "DG-02-02",
        "principle": "Unificar segurança de dados e IA",
        "title": "Configurar registro de auditoria",
        "capabilities": "Unity Catalog",
        "details": "O registro de auditoria é importante para fornecer um relato detalhado das atividades do sistema (ações do usuário, alterações nas configurações, etc.) que podem impactar a integridade do sistema. Enquanto os logs de sistema padrão são projetados para ajudar desenvolvedores a solucionar erros, os logs de auditoria fornecem um registro histórico de atividades para fins de conformidade e outras aplicações de políticas de negócios. Manter logs de auditoria robustos pode ajudar a identificar e garantir preparação diante de ameaças, violações, fraudes e outros problemas do sistema.\n\nO Databricks fornece acesso a logs de auditoria das atividades realizadas pelos usuários do Databricks, permitindo que sua empresa monitore padrões detalhados de uso. Existem dois tipos de logs: logs de auditoria no nível do workspace e logs de auditoria no nível da conta.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-02-03",
        "identifier": "DG-02-03",
        "principle": "Unificar segurança de dados e IA",
        "title": "Auditar eventos da plataforma de dados",
        "capabilities": "Unity Catalog",
        "details": "Auditar eventos da plataforma de dados é importante porque (veja acima)\n\nO Unity Catalog captura um log de auditoria das ações realizadas contra o metastore. Isso permite que administradores acessem detalhes granulares sobre quem acessou um determinado conjunto de dados e quais ações foram realizadas.\nAWS | Azure | GCP\n\nPara compartilhamento seguro com Delta Sharing, o Databricks fornece logs de auditoria para monitorar eventos do Delta Sharing, incluindo:\n\n- Quando alguém cria, modifica, atualiza ou exclui um compartilhamento ou destinatário.\n- Quando um destinatário acessa um link de ativação e baixa a credencial.\n- Quando um destinatário acessa compartilhamentos ou dados em tabelas compartilhadas.\n- Quando a credencial de um destinatário é rotacionada ou expira.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-03-01",
        "identifier": "DG-03-01",
        "principle": "Estabelecer padrões de qualidade de dados",
        "title": "Definir e documentar padrões de qualidade de dados",
        "capabilities": null,
        "details": "Definir padrões de qualidade de dados claros e acionáveis é crucial, porque ajuda a garantir que os dados usados para análise, relatórios e tomada de decisão sejam confiáveis e dignos de confiança. Documentar esses padrões ajuda a garantir que sejam mantidos.\n\nOs padrões de qualidade de dados devem ser baseados nas necessidades específicas do negócio e devem abordar dimensões da qualidade de dados como precisão, completude, consistência, pontualidade e confiabilidade:\n- Precisão: Garantir que os dados reflitam com precisão os valores do mundo real.\n- Completude: Todos os dados necessários devem ser capturados e nenhum dado crítico deve estar faltando.\n- Consistência: Os dados em todos os sistemas devem ser consistentes e não contradizer outros dados.\n- Pontualidade: Os dados devem ser atualizados e disponíveis de maneira oportuna.\n- Confiabilidade: Os dados devem ser obtidos e processados de uma forma que garanta sua confiabilidade.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-03-02",
        "identifier": "DG-03-02",
        "principle": "Estabelecer padrões de qualidade de dados",
        "title": "Usar ferramentas de qualidade de dados para perfilar, limpar, validar e monitorar dados",
        "capabilities": null,
        "details": "Aproveite ferramentas de qualidade de dados para perfilamento, limpeza, validação e monitoramento de dados. Essas ferramentas ajudam a automatizar os processos de detecção e correção de problemas de qualidade de dados, o que é vital para escalar iniciativas de qualidade de dados em grandes conjuntos de dados típicos em data lakes.\n\nPara equipes usando DLT, você pode usar expectations para definir restrições de qualidade de dados no conteúdo de um dataset. As expectations permitem garantir que os dados que chegam às tabelas atendam aos requisitos de qualidade de dados e fornecem insights sobre a qualidade de dados para cada atualização de pipeline.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "DG-03-03",
        "identifier": "DG-03-03",
        "principle": "Estabelecer padrões de qualidade de dados",
        "title": "Implementar e aplicar formatos e definições de dados padronizados",
        "capabilities": null,
        "details": "Formatos e definições de dados padronizados ajudam a alcançar uniformidade na representação de dados em todos os sistemas para facilitar a integração e análise de dados, reduzir custos e melhorar a tomada de decisão através da melhoria da comunicação e colaboração entre diferentes equipes e departamentos. Também ajuda a fornecer estrutura para criar e manter a qualidade dos dados.\n\nDesenvolva e aplique um dicionário de dados padrão que inclua definições, formatos e valores aceitáveis para todos os elementos de dados usados em toda a organização.\n\nUse convenções de nomenclatura consistentes, formatos de data e unidades de medida em todos os bancos de dados e aplicações para evitar discrepâncias e confusão.",
        "type": "status",
        "status": "open"
      }
    ]
  },
  {
    "id": "interoperability-usability",
    "name": "Interoperabilidade e Usabilidade",
    "description": "Permitir interação perfeita entre usuários, sistemas e dados em toda a plataforma lakehouse.",
    "questions": [
      {
        "id": "IU-01-01",
        "identifier": "IU-01-01",
        "principle": "Definir padrões para integração",
        "title": "Usar padrões de integração reutilizáveis para integração externa",
        "capabilities": "Automação",
        "details": "Padrões de integração são importantes porque fornecem diretrizes de como os dados devem ser representados, trocados e processados entre diferentes sistemas e aplicações. Esses padrões ajudam a garantir que os dados sejam compatíveis, de alta qualidade e interoperáveis entre várias fontes e destinos.\n\nO Databricks Lakehouse vem com uma API REST abrangente que permite gerenciar praticamente todos os aspectos da plataforma de forma programática. O servidor da API REST roda no plano de controle e fornece um endpoint unificado para gerenciar a plataforma Databricks.\n\nA API REST fornece o nível mais baixo de integração que sempre pode ser usado. No entanto, a forma preferida de integrar com o Databricks é usar abstrações de nível superior, como os SDKs do Databricks ou ferramentas CLI. As ferramentas CLI são baseadas em shell e permitem integrar facilmente a plataforma Databricks em workflows de CI/CD e MLOps.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-01-02",
        "identifier": "IU-01-02",
        "principle": "Definir padrões para integração",
        "title": "Usar conectores otimizados para ingerir fontes de dados no lakehouse",
        "capabilities": "Lakehouse Federation",
        "details": "Databricks fornece conectores otimizados para serviços de mensageria como Apache Kafka para ingestão de dados em tempo quase real.\nDatabricks fornece integrações integradas com muitos sistemas de dados nativos da nuvem, além de suporte JDBC extensível para conectar a outros sistemas de dados.\n\nUma opção para integrar fontes de dados sem ETL é o Lakehouse Federation. Lakehouse Federation é a plataforma de federação de consultas do Databricks. O termo federação de consultas descreve um conjunto de recursos que permitem usuários e sistemas executarem consultas em múltiplas fontes de dados sem precisar migrar todos os dados para um sistema unificado. Databricks usa o Unity Catalog para gerenciar a federação de consultas. As ferramentas de governança de dados e linhagem de dados do Unity Catalog garantem que o acesso aos dados seja gerenciado e auditado para todas as consultas federadas executadas pelos usuários em seus workspaces Databricks.\n\nQualquer consulta na plataforma Databricks que use uma fonte Lakehouse Federation será enviada para essa fonte. Certifique-se de que o sistema de origem possa lidar com a carga. Também esteja ciente de que se o sistema de origem estiver implantado em uma região de nuvem ou nuvem diferente, haverá um custo de egress para cada consulta.\n\nConsidere descarregar o acesso a bancos de dados subjacentes via views materializadas para evitar cargas altas/concorrentes em bancos de dados operacionais e reduzir custos de egress.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-01-03",
        "identifier": "IU-01-03",
        "principle": "Definir padrões para integração",
        "title": "Usar ferramentas de parceiros certificados",
        "capabilities": "Databricks Partner Connect",
        "details": "Usar ferramentas de parceiros certificados facilita a conexão de dados entre dois sistemas. Essas integrações permitem usar as soluções dos parceiros mantendo seus dados unificados no Lakehouse.\n\nAs empresas têm necessidades diferentes, e nenhuma ferramenta única pode atender todas elas. O Partner Connect permite explorar e integrar facilmente com nossos parceiros, que cobrem todos os aspectos do lakehouse: ingestão de dados, preparação e transformação, BI e visualização, machine learning, qualidade de dados, e assim por diante. O Partner Connect permite criar contas de teste com parceiros tecnológicos selecionados do Databricks e conectar seu workspace Databricks a soluções de parceiros a partir da UI do Databricks. Experimente soluções de parceiros usando seus dados no lakehouse Databricks, e então adote as soluções que melhor atendam às necessidades do seu negócio.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-01-04",
        "identifier": "IU-01-04",
        "principle": "Definir padrões para integração",
        "title": "Reduzir complexidade de pipelines de engenharia de dados",
        "capabilities": "Delta Live Tables; Autoloader",
        "details": "Investir na redução da complexidade de pipelines de engenharia de dados permite escalabilidade, agilidade e flexibilidade para expandir e inovar mais rapidamente. Pipelines simplificados facilitam o gerenciamento e adaptação de todas as necessidades operacionais de um pipeline de engenharia de dados: orquestração de tarefas, gerenciamento de clusters, monitoramento, qualidade de dados e tratamento de erros.\n\nDelta Live Tables é um framework para construir pipelines de processamento de dados confiáveis, sustentáveis e testáveis. Você define as transformações a serem realizadas em seus dados, e o Delta Live Tables gerencia orquestração de tarefas, gerenciamento de clusters, monitoramento, qualidade de dados e tratamento de erros.\n\nAuto Loader processa arquivos de dados novos de forma incremental e eficiente conforme chegam no armazenamento em nuvem. Ele pode ler arquivos de dados do armazenamento em nuvem de forma confiável. Um aspecto essencial tanto do Delta Live Tables quanto do Auto Loader é sua natureza declarativa: Sem eles, é necessário construir pipelines complexos que integram diferentes serviços de nuvem - como um serviço de notificação e um serviço de filas - para ler arquivos de nuvem de forma confiável baseado em eventos e permitir a combinação de fontes batch e streaming de forma confiável.\n\nAuto Loader e Delta Live Tables reduzem dependências do sistema e complexidade, melhorando significativamente a interoperabilidade com o armazenamento em nuvem e entre diferentes paradigmas como batch e streaming.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-02-01",
        "identifier": "IU-02-01",
        "principle": "Utilizar interfaces e formatos de dados abertos",
        "title": "Usar formatos de dados abertos",
        "capabilities": "Delta Lake",
        "details": "Usar um formato de dados aberto significa que não há restrições no seu uso. Isso é importante porque remove barreiras para acessar e usar os dados para análise e gerar insights de negócio. Formatos abertos, como os construídos no Apache Spark, também adicionam recursos que aumentam o desempenho com suporte a transações ACID, streaming unificado e processamento de dados em batch. Além disso, código aberto é orientado pela comunidade, significando que a comunidade está constantemente trabalhando para melhorar recursos existentes e adicionar novos, facilitando aos usuários obter o máximo de seus projetos.\n\nO framework Delta Lake tem muitas vantagens, desde recursos de confiabilidade até melhorias de alto desempenho, e também é um formato de dados totalmente aberto. Além disso, o Delta Lake vem com uma biblioteca Delta Standalone, que abre o formato Delta para projetos de desenvolvimento. É uma biblioteca Java de nó único que pode ler e escrever em tabelas Delta. Dezenas de ferramentas e aplicações de terceiros suportam Delta Lake.\n\nUniForm aproveita o fato de que tanto Delta Lake quanto Iceberg consistem em arquivos de dados Parquet e uma camada de metadados. UniForm gera automaticamente metadados Iceberg de forma assíncrona, permitindo que clientes Iceberg leiam tabelas Delta como se fossem tabelas Iceberg.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-02-02",
        "identifier": "IU-02-02",
        "principle": "Utilizar interfaces e formatos de dados abertos",
        "title": "Habilitar compartilhamento seguro de dados para todos os ativos",
        "capabilities": "Delta Sharing",
        "details": "Compartilhar dados pode levar a melhor colaboração e tomada de decisão. No entanto, ao compartilhar dados, é importante manter controle sobre o uso dos dados, garantir confidencialidade e estabelecer diretrizes para coleta, armazenamento, processamento e compartilhamento de dados - para proteger seus dados e garantir conformidade com leis e regulamentos relevantes sobre compartilhamento de dados.\n\nDelta Sharing fornece uma solução aberta para compartilhar dados ao vivo de seu lakehouse de forma segura para qualquer plataforma de computação. Os destinatários não precisam estar na plataforma Databricks, na mesma nuvem, ou em qualquer nuvem. Delta Sharing é nativamente integrado com Unity Catalog, permitindo que organizações gerenciem e auditem centralmente dados compartilhados em toda a empresa e compartilhem ativos de dados com confiança enquanto atendem aos requisitos de segurança e conformidade.\n\nProvedores de dados podem compartilhar dados ao vivo de onde eles residem em seu armazenamento em nuvem sem replicar ou mover para outro sistema. Essa abordagem reduz os custos operacionais de compartilhamento de dados porque provedores de dados não precisam replicar dados múltiplas vezes entre nuvens, geografias ou plataformas de dados para cada um de seus consumidores de dados.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-02-03",
        "identifier": "IU-02-03",
        "principle": "Utilizar interfaces e formatos de dados abertos",
        "title": "Usar padrões abertos para fluxos de trabalho de IA",
        "capabilities": "MLFlow",
        "details": "Assim como usar um formato de dados de código aberto, usar padrões abertos para seus fluxos de trabalho de IA tem benefícios similares de flexibilidade, agilidade, custo e segurança.\n\nMLflow é uma plataforma de código aberto para gerenciar o ciclo de vida de ML, incluindo experimentação, reprodutibilidade, implantação e um registro central de modelos. Usar MLflow no Databricks fornece ambas as vantagens: Você pode escrever seu fluxo de trabalho de ML usando uma ferramenta aberta e portátil e usar serviços confiáveis operados pelo Databricks (Tracking Server, Model Registry). Também adiciona serving de modelos empresarial e escalável, permitindo hospedar modelos MLflow como endpoints REST.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-03-01",
        "identifier": "IU-03-01",
        "principle": "Simplificar implementação de novos casos de uso",
        "title": "Fornecer experiência de autoatendimento em toda a plataforma",
        "capabilities": "Databricks Data Intelligence Platform",
        "details": "Há vários benefícios de uma plataforma onde os usuários têm autonomia para usar as ferramentas e capacidades de acordo com suas necessidades. Investir na criação de uma plataforma de autoatendimento facilita a escala para atender mais usuários e impulsiona maior eficiência minimizando a necessidade de envolvimento humano para provisionar usuários, resolver problemas e processar solicitações de acesso.\n\nA Databricks Data Intelligence Platform tem todas as capacidades necessárias para fornecer uma experiência de autoatendimento. Embora possa haver uma etapa de aprovação obrigatória, a melhor prática é automatizar completamente a configuração quando uma unidade de negócio solicita acesso ao lakehouse. Provisione automaticamente seu novo ambiente, sincronize usuários e use SSO para autenticação, forneça controle de acesso a dados comuns e armazenamentos de objetos separados para seus próprios dados, e assim por diante. Junto com um catálogo de dados central contendo conjuntos de dados semanticamente consistentes e prontos para negócios, isso fornece acesso rápido e seguro para novas unidades de negócio às capacidades do Lakehouse e aos dados de que precisam.\n\nBlog",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-03-02",
        "identifier": "IU-03-02",
        "principle": "Simplificar implementação de novos casos de uso",
        "title": "Usar serviços serverless",
        "capabilities": "Databricks Serverless SQL;\nServerless Workflows;\nServerless Notebooks",
        "details": "Usar serverless tem múltiplos benefícios além de apenas economia de custos, escalabilidade e desempenho. O desenvolvimento é mais rápido quando os desenvolvedores podem se concentrar no código em vez da infraestrutura. Eles também têm maior flexibilidade em como projetam suas aplicações.\n\nPara computação serverless na plataforma Databricks, a camada de computação roda na conta Databricks do cliente. Administradores de nuvem não precisam mais gerenciar ambientes de nuvem complexos que envolvem ajustar cotas, criar e manter ativos de rede e juntar fontes de faturamento. Os usuários se beneficiam de tempos de espera quase zero para início de cluster e melhor concorrência em suas consultas.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-03-03",
        "identifier": "IU-03-03",
        "principle": "Simplificar implementação de novos casos de uso",
        "title": "Usar modelos de computação predefinidos",
        "capabilities": "Databricks Cluster Policies",
        "details": "Modelos de computação predefinidos podem ajudar a trazer alguns dos benefícios do serverless quando não está disponível para uma ferramenta específica ou em sua região. Principalmente, esses modelos removem a necessidade dos desenvolvedores provisionarem sua própria computação e determinarem necessidades de infraestrutura, assim acelerando o tempo de desenvolvimento.\n\nRemova o fardo de definir um cluster (tipo de VM, tamanho do nó e tamanho do cluster) dos usuários finais. Isso pode ser alcançado das seguintes maneiras:\n\n- Forneça clusters compartilhados como ambientes imediatos para usuários. Nesses clusters, use auto scaling até um mínimo muito baixo de nós para evitar altos custos de ociosidade.\n\n- Use políticas de cluster para definir clusters de tamanho padrão (P, M, G) para projetos como um ambiente de trabalho padronizado.\n\nBlog\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-03-04",
        "identifier": "IU-03-04",
        "principle": "Simplificar implementação de novos casos de uso",
        "title": "Usar capacidades de IA para aumentar produtividade",
        "capabilities": "Databricks Assistant",
        "details": "Além de aumentar a produtividade, ferramentas de IA também podem ajudar a identificar padrões em erros e fornecer insights adicionais baseados na entrada. No geral, incorporar essas ferramentas no processo de desenvolvimento pode reduzir significativamente erros e facilitar a tomada de decisões - levando a um tempo mais rápido para lançamento.\n\nDatabricks Assistant permite consultar dados através de uma interface conversacional, tornando você mais produtivo dentro do Databricks. Descreva sua tarefa em linguagem natural e deixe o Assistant gerar consultas SQL, explicar código complexo e corrigir erros automaticamente. O Assistant aproveita os metadados do Unity Catalog para entender suas tabelas, colunas, descrições e ativos de dados populares em sua empresa para fornecer respostas personalizadas para você.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-04-01",
        "identifier": "IU-04-01",
        "principle": "Garantir consistência e usabilidade dos dados",
        "title": "Oferecer dados como produtos reutilizáveis confiáveis",
        "capabilities": null,
        "details": "Dados como produtos é uma estratégia de dados que pode ajudar organizações a aproveitar todo o potencial de seus ativos de dados. Transforma dados brutos em um produto estruturado, acessível e valioso.\n\nProduzir dados como produto de alta qualidade é um objetivo primário de qualquer plataforma de dados. A ideia é que equipes de engenharia de dados apliquem pensamento de produto aos dados curados: Os ativos de dados são seus produtos, e os cientistas de dados, engenheiros de ML e BI, ou quaisquer outras equipes de negócio que consomem dados são seus clientes. Esses clientes devem ser capazes de descobrir, acessar e criar valor a partir desses dados como produtos através de uma experiência de autoatendimento sem a intervenção das equipes de dados especializadas.\n\neBook",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-04-02",
        "identifier": "IU-04-02",
        "principle": "Garantir consistência e usabilidade dos dados",
        "title": "Publicar produtos de dados semanticamente consistentes",
        "capabilities": null,
        "details": "Um data lake geralmente contém dados de diferentes sistemas de origem. Esses sistemas às vezes nomeiam o mesmo conceito de forma diferente (como cliente vs. conta) ou significam conceitos diferentes pelo mesmo identificador. Para que usuários de negócio combinem facilmente esses conjuntos de dados de forma significativa, os dados devem ser tornados homogêneos entre todas as fontes para serem semanticamente consistentes. Além disso, para que alguns dados sejam valiosos para análise, regras de negócio internas devem ser aplicadas corretamente, como reconhecimento de receita. Para garantir que todos os usuários estejam usando os dados corretamente interpretados, conjuntos de dados com essas regras devem ser disponibilizados e publicados no Unity Catalog. O acesso aos dados de origem deve ser limitado às equipes que entendem o uso correto.\n\neBook",
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-04-03",
        "identifier": "IU-04-03",
        "principle": "Garantir consistência e usabilidade dos dados",
        "title": "Fornecer catálogo central para descoberta e linhagem",
        "capabilities": "Unity Catalog",
        "details": "Um catálogo central para descoberta e linhagem ajuda consumidores de dados a acessar dados de múltiplas fontes em toda a empresa, reduzindo assim a sobrecarga operacional para a equipe central de governança.\n\nNo Unity Catalog, administradores e responsáveis por dados gerenciam usuários e seu acesso a dados centralmente em todos os workspaces em uma conta Databricks. Usuários em diferentes workspaces podem compartilhar os mesmos dados e, dependendo dos privilégios de usuário concedidos centralmente no Unity Catalog, podem acessar dados juntos.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      }
    ]
  },
  {
    "id": "operational-excellence",
    "name": "Excelência Operacional",
    "description": "Manter sistemas de produção eficientemente com monitoramento adequado, automação e melhores práticas.",
    "questions": [
      {
        "id": "OE-01-01",
        "identifier": "OE-01-01",
        "principle": "Otimizar processos de construção e lançamento",
        "title": "Estabelecer equipe de operações de plataforma",
        "capabilities": null,
        "details": "É uma melhor prática geral ter uma equipe de operações de plataforma para permitir que equipes de dados trabalhem em uma ou mais plataformas de dados. Esta equipe é responsável por criar blueprints e melhores práticas internamente. Eles fornecem ferramentas - por exemplo, para automação de infraestrutura e acesso de autoatendimento - e garantem que as necessidades de segurança e conformidade sejam atendidas. Dessa forma, a responsabilidade de proteger os dados da plataforma está em uma equipe central, para que equipes distribuídas possam se concentrar em trabalhar com dados e produzir novos insights.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-01-02",
        "identifier": "OE-01-02",
        "principle": "Otimizar processos de construção e lançamento",
        "title": "Usar controle de código fonte",
        "capabilities": "Databricks Git Folders",
        "details": "O gerenciamento de código fonte (SCM) ajuda desenvolvedores a trabalhar de forma mais eficaz, o que pode levar a uma velocidade de lançamento mais rápida e custos de desenvolvimento mais baixos. Ter uma ferramenta que ajuda a rastrear alterações, manter a integridade do código, detectar bugs e reverter para versões anteriores, se necessário, é um componente importante da sua arquitetura de solução geral.\n\nAs Git folders do Databricks permitem que usuários armazenem notebooks ou outros arquivos em um repositório Git, fornecendo recursos como clonagem de repositório, commit e push, pull, gerenciamento de branches e visualização de diffs de arquivos. Use Git folders para melhor visibilidade e rastreamento de código.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-01-03",
        "identifier": "OE-01-03",
        "principle": "Otimizar processos de construção e lançamento",
        "title": "Implementar pipelines CI/CD",
        "capabilities": "Databricks Git Folders",
        "details": "Integração contínua e entrega contínua (CI/CD) referem-se ao desenvolvimento e entrega de software em ciclos curtos e frequentes usando pipelines de automação. Embora este não seja um processo novo, tendo sido onipresente na engenharia de software tradicional por décadas, está se tornando um processo cada vez mais necessário para equipes de engenharia de dados e ciência de dados. Para que produtos de dados sejam valiosos, eles devem ser entregues de maneira oportuna. Além disso, os consumidores devem ter confiança na validade dos resultados dentro desses produtos. Ao automatizar a construção, teste e implantação de código, as equipes de desenvolvimento podem entregar lançamentos com mais frequência e confiabilidade do que processos manuais ainda prevalentes em muitas equipes de engenharia de dados e ciência de dados.\n\nPara mais informações sobre melhores práticas para desenvolvimento de código usando Databricks Git folders, consulte técnicas de CI/CD com Git e Databricks Git folders (Repos). Isso, junto com a API REST do Databricks, permite construir processos de implantação automatizados com GitHub Actions, pipelines do Azure DevOps ou jobs do Jenkins.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-01-04",
        "identifier": "OE-01-04",
        "principle": "Otimizar processos de construção e lançamento",
        "title": "Padronizar processos MLOps",
        "capabilities": "MLFlow",
        "details": "Os processos de MLOps fornecem reprodutibilidade de pipelines de ML, permitindo colaboração mais estreita entre equipes de dados, reduzindo conflitos com devops e TI, e acelerando a velocidade de lançamento. Como muitos modelos são usados para orientar decisões de negócios importantes, padronizar processos de MLOps garante que os modelos sejam desenvolvidos, testados e implantados de forma consistente e confiável.\n\nConstruir e implantar modelos de ML é complexo. Existem muitas opções disponíveis para alcançar isso, mas poucas são padrões bem definidos. Como resultado, nos últimos anos, vimos o surgimento de operações de machine learning (MLOps). MLOps é um conjunto de processos e automação para gerenciar modelos, dados e código para melhorar a estabilidade de desempenho e eficiência de longo prazo em sistemas de ML. Abrange preparação de dados, análise exploratória de dados (EDA), engenharia de features, treinamento de modelos, validação de modelos, implantação e monitoramento.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-01-05",
        "identifier": "OE-01-05",
        "principle": "Otimizar processos de construção e lançamento",
        "title": "Organizar workspaces",
        "capabilities": "Databricks Workspaces",
        "details": "Organizar workspaces no Databricks oferece vários benefícios que melhoram a eficiência e segurança das operações de dados dentro de uma empresa. As principais vantagens incluem:\n\n1. Ambiente Estruturado: Implementar ambientes estruturados como workspaces de desenvolvimento, staging e produção ajuda a otimizar processos e manter a consistência em diferentes estágios de desenvolvimento de projetos\n\n2. Isolamento e Segurança: Os workspaces podem ser isolados por linha de negócios ou produto de dados, o que não apenas melhora a governança ao dividir claramente usuários e funções, mas também aumenta a segurança ao restringir o acesso com base em necessidades de negócios específicas ou características de dados\n\n3. Flexibilidade e Colaboração: O isolamento baseado em produtos de dados permite mais flexibilidade e oportunidades colaborativas dentro de ambientes de desenvolvimento compartilhados e workspaces sandbox, promovendo inovação sem arriscar o fluxo de trabalho principal\n\n4. Recuperação de Desastres: Workspaces organizados facilitam a implementação de planos de recuperação de desastres e backups regionais\n\n5. Governança e Conformidade: Governança centralizada através de um Centro de Excelência (COE) e o uso dos recursos de governança do Databricks ajudam a minimizar riscos e garantir conformidade com requisitos regulatórios\n\n6. Automação e Eficiência: Automatizar processos de nuvem, incluindo gerenciamento de infraestrutura, CI/CD, backup e monitoramento, reduz a sobrecarga manual e aumenta a eficiência operacional",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-01-06",
        "identifier": "OE-01-06",
        "principle": "Otimizar processos de construção e lançamento",
        "title": "Gerenciar modelos externos via AI Gateway",
        "capabilities": null,
        "details": "Modelos externos são modelos de terceiros hospedados fora do Databricks. Suportados pelo Model Serving AI Gateway, os modelos externos do Databricks via AI Gateway permitem otimizar o uso e gerenciamento de vários provedores de LLM (Large Language Model), como OpenAI e Anthropic, dentro de uma organização. Você também pode usar o Mosaic AI Model Serving como provedor para servir modelos de ML preditivos, que oferece limites de taxa para esses endpoints. Como parte desse suporte, o Model Serving oferece uma interface de alto nível que simplifica a interação com esses serviços, fornecendo um endpoint unificado para lidar com solicitações específicas relacionadas a LLM. Além disso, o suporte do Databricks para modelos externos fornece gerenciamento centralizado de credenciais. Ao armazenar chaves de API em um local seguro, as organizações podem melhorar sua postura de segurança minimizando a exposição de chaves de API sensíveis em todo o sistema.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-01-07",
        "identifier": "OE-01-07",
        "principle": "Otimizar processos de construção e lançamento",
        "title": "Definir estratégia de catálogo para sua empresa usando Unity Catalog",
        "capabilities": "Unity Catalog",
        "details": "Uma estratégia de catálogo bem definida é essencial para organizar e governar ativos de dados em toda a sua empresa. O Unity Catalog fornece uma solução de governança unificada que permite gerenciar o acesso a dados, modelos de IA e outros ativos em múltiplos workspaces e plataformas de nuvem.\n\nConsiderações chave para sua estratégia de catálogo incluem:\n- Convenções de nomenclatura de catálogo alinhadas com unidades de negócio, ambientes ou domínios de dados\n- Organização de schemas que reflete sua arquitetura de dados (camadas bronze, silver, gold)\n- Políticas de controle de acesso usando permissões granulares do Unity Catalog\n- Classificação e etiquetagem de dados para conformidade e descoberta\n- Compartilhamento de dados entre workspaces usando o metastore centralizado do Unity Catalog\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-01-08",
        "identifier": "OE-01-08",
        "principle": "Otimizar processos de construção e lançamento",
        "title": "Usar AI Playground para testar e comparar modelos",
        "capabilities": "Databricks LLM Playground",
        "details": "Novas ferramentas visuais sem código permitem que usuários comparem a saída de modelos com base em prompts definidos, que são automaticamente rastreados no MLflow. Com integração ao Mosaic AI Model Serving, os clientes podem implantar o melhor modelo em produção. O AI Playground é um ambiente semelhante a chat onde você pode testar, fazer prompts e comparar LLMs.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-01-09",
        "identifier": "OE-01-09",
        "principle": "Otimizar processos de construção e lançamento",
        "title": "Preparar dados para treinamento de modelos de IA",
        "capabilities": null,
        "details": "Aproveitar dados internos e propriedade intelectual para personalizar grandes modelos de IA pode oferecer uma vantagem competitiva significativa. No entanto, esse processo pode ser complexo, envolvendo coordenação em várias partes da organização. A Plataforma de Inteligência de Dados aborda esse desafio integrando dados de departamentos e sistemas tradicionalmente isolados. Essa integração facilita uma estratégia de dados e IA mais coesa, permitindo o treinamento, teste e avaliação eficazes de modelos usando um conjunto de dados abrangente. Tenha cuidado ao preparar dados para treinamento de modelos tradicionais e GenAI para garantir que você não esteja incluindo involuntariamente dados que causem conflitos legais, como violações de direitos autorais, violações de privacidade ou violações de HIPAA.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-01",
        "identifier": "OE-02-01",
        "principle": "Automatizar implantações e cargas de trabalho",
        "title": "Usar infraestrutura como código",
        "capabilities": "Databricks Terraform Provider",
        "details": "Infraestrutura como Código permite que desenvolvedores e equipes de operações gerenciem, monitorem e provisionem recursos automaticamente, em vez de configurar manualmente dispositivos de hardware, sistemas operacionais, aplicativos e serviços.\n\nO HashiCorp Terraform é uma ferramenta de código aberto popular para criar infraestrutura de nuvem segura e previsível em vários provedores de nuvem. O provedor Terraform do Databricks gerencia workspaces do Databricks e a infraestrutura de nuvem associada usando uma ferramenta flexível e poderosa. O objetivo do provedor Terraform do Databricks é suportar todas as APIs REST do Databricks, apoiando a automação dos aspectos mais complicados de implantar e gerenciar suas plataformas de dados. O provedor Terraform do Databricks é a ferramenta recomendada para implantar e gerenciar clusters e jobs de forma confiável, provisionar workspaces do Databricks e configurar o acesso a dados.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-02",
        "identifier": "OE-02-02",
        "principle": "Automatizar implantações e cargas de trabalho",
        "title": "Usar modelos de computação predefinidos",
        "capabilities": "Compute Policies",
        "details": "Modelos de computação predefinidos podem ajudar a trazer alguns dos benefícios do serverless quando não está disponível. Principalmente, esses modelos eliminam a necessidade de desenvolvedores provisionarem sua própria computação e determinarem necessidades de infraestrutura, acelerando assim o tempo de desenvolvimento.\n\nUse políticas de cluster para definir clusters dimensionados por tamanho (P, M, G) para projetos como um ambiente de trabalho padronizado.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-03",
        "identifier": "OE-02-03",
        "principle": "Automatizar implantações e cargas de trabalho",
        "title": "Configurar fluxos de trabalho automatizados",
        "capabilities": "Databricks Workflows",
        "details": "Configurar fluxos de trabalho automatizados para jobs pode ajudar a reduzir tarefas manuais desnecessárias e melhorar a produtividade através do processo DevOps de criar e implantar jobs.\n\nRecomendamos usar workflows com jobs para agendar tarefas de processamento de dados e análise de dados em clusters Databricks com recursos escaláveis. Os jobs podem consistir em uma única tarefa ou em um grande fluxo de trabalho multitarefa com dependências complexas. O Databricks gerencia orquestração de tarefas, gerenciamento de cluster, monitoramento e relatórios de erros para todos os seus jobs. Você pode executar seus jobs imediatamente ou periodicamente através de um sistema de agendamento fácil de usar. Você pode implementar tarefas de job usando notebooks, JARs, pipelines Delta Live Tables ou aplicativos Python, Scala, Spark submit e Java.\nAWS | Azure | GCP\n\nA API REST abrangente do Databricks é usada por orquestradores externos para orquestrar ativos, notebooks e jobs do Databricks.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-04",
        "identifier": "OE-02-04",
        "principle": "Automatizar implantações e cargas de trabalho",
        "title": "Usar ingestão de arquivos baseada em eventos",
        "capabilities": "Autoloader",
        "details": "A ingestão de arquivos baseada em eventos (vs. baseada em agendamento) tem vários benefícios, incluindo eficiência, maior frescor de dados e ingestão de dados em tempo real. Executar um job apenas quando um evento ocorre garante que você não está desperdiçando recursos, economizando custos. Arquiteturas baseadas em eventos também podem incorporar medidas de segurança como controle de acesso baseado em funções e registro de auditoria, melhorando assim a postura geral de segurança e protegendo dados.\n\nO Auto Loader processa de forma incremental e eficiente novos arquivos de dados à medida que chegam no armazenamento em nuvem. Ele pode ingerir muitos formatos de arquivo como JSON, CSV, PARQUET, AVRO, ORC, TEXT e BINARYFILE. Com uma pasta de entrada no armazenamento em nuvem, o Auto Loader processa automaticamente novos arquivos à medida que chegam.\nPara ingestões únicas, considere usar o comando COPY INTO em vez disso.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-05",
        "identifier": "OE-02-05",
        "principle": "Automatizar implantações e cargas de trabalho",
        "title": "Usar frameworks de ETL declarativos",
        "capabilities": "Delta Live Tables",
        "details": "Usar frameworks de ETL ajuda a melhorar a qualidade dos dados, economiza tempo e facilita a análise de conjuntos de dados maiores. Eles também ajudam a eliminar erros de dados, gargalos e latência.\n\nDelta Live Tables é um framework declarativo para construir pipelines de processamento de dados confiáveis, mantíveis e testáveis. Você define as transformações a serem realizadas em seus dados e o Delta Live Tables gerencia orquestração de tarefas, gerenciamento de cluster, monitoramento, qualidade de dados e tratamento de erros.\n\nCom Delta Live Tables, defina facilmente pipelines de dados de ponta a ponta em SQL ou Python: Especifique a fonte de dados, a lógica de transformação e o estado de destino dos dados. O Delta Live Tables mantém dependências e determina automaticamente a infraestrutura para executar o job.\n\nPara gerenciar a qualidade dos dados, o Delta Live Tables monitora tendências de qualidade de dados ao longo do tempo, evitando que dados ruins fluam para tabelas através de validação e verificações de integridade com políticas de erro predefinidas.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-06",
        "identifier": "OE-02-06",
        "principle": "Automatizar implantações e cargas de trabalho",
        "title": "Implantar modelos como código",
        "capabilities": "MLFlow",
        "details": "Implantar modelos como código é adotar uma abordagem DevOps para machine learning. Essa abordagem tem vários benefícios. Os modelos são versionados junto com outro código, os lançamentos são implantados como uma unidade e as implantações são reproduzíveis (fallback é possível).\n\nA abordagem de implantar código para implantação de modelo envolve desenvolver e testar código de treinamento e código auxiliar em um ambiente de treinamento, seguido pela promoção para um ambiente de staging para testes adicionais em um subconjunto de dados. Uma vez validado, o código é promovido para um ambiente de produção para treinamento e testes finais no conjunto de dados completo. O modelo e os pipelines auxiliares são então implantados.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-07",
        "identifier": "OE-02-07",
        "principle": "Automatizar implantações e cargas de trabalho",
        "title": "Gerenciar ciclos de vida de modelos ML",
        "capabilities": "Unity Catalog",
        "details": "Como os ciclos de vida dos modelos não correspondem um a um com os ciclos de vida do código, faz sentido que o gerenciamento de modelos tenha seu próprio serviço.\n\nO Unity Catalog no Databricks oferece uma solução abrangente para gerenciar o ciclo de vida de modelos de machine learning (ML), fornecendo recursos como controle de acesso centralizado, versionamento, implantação e monitoramento. Ao habilitar o Unity Catalog em seu workspace, você pode treinar, registrar e gerenciar diferentes versões de modelos de ML usando APIs do MLflow, com suporte para aliases para facilitar a promoção e rollback de modelos.\n\nO catálogo garante governança robusta com permissões no nível da conta e integra-se perfeitamente com outras ferramentas e sistemas. Ele também suporta serving de modelos em escala e fornece linhagem detalhada e monitoramento de desempenho em tempo real, garantindo que os modelos permaneçam eficazes e em conformidade ao longo de seu ciclo de vida.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-08",
        "identifier": "OE-02-08",
        "principle": "Automatizar implantações e cargas de trabalho",
        "title": "Automatizar rastreamento de experimentos ML",
        "capabilities": "MLFlow",
        "details": "Rastrear experimentos de ML é o processo de salvar metadados relevantes para cada experimento e organizar os experimentos. Esses metadados incluem entradas/saídas do experimento, parâmetros, modelos e outros artefatos. O objetivo do rastreamento de experimentos é criar resultados reproduzíveis em todas as etapas do processo de desenvolvimento de modelos de ML. Automatizar esse processo facilita o dimensionamento do número de experimentos e garante consistência nos metadados capturados em todos os experimentos.\n\nO Databricks Autologging é uma solução sem código que estende o registro automático do MLflow para entregar rastreamento automático de experimentos para sessões de treinamento de machine learning no Databricks. O Databricks Auto Logging captura automaticamente parâmetros de modelo, métricas, arquivos e informações de linhagem quando você treina modelos com execuções de treinamento registradas como execuções de rastreamento do MLflow.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-09",
        "identifier": "OE-02-09",
        "principle": "Automatizar implantações e cargas de trabalho",
        "title": "Automatizar pipelines ML",
        "capabilities": "Databricks Terraform provider",
        "details": "Os dados usados para pipelines de ML vêm das mesmas fontes que os dados usados para outros pipelines de dados. Além disso, pipelines de ML e dados são semelhantes no sentido de que ambos devem ser monitorados regularmente e envolvem preparação de dados para análise por usuários de negócios ou treinamento de modelos. Ambos também precisam ser escaláveis e seguros. Em ambos os casos, a infraestrutura usada deve suportar essas atividades.\n\nPipelines de ML devem ser automatizados usando muitas das mesmas técnicas que outros pipelines de dados. Use o provedor Terraform do Databricks para automatizar a implantação. ML requer implantar infraestrutura como jobs de inferência, endpoints de serving e jobs de featurização. Todos os pipelines de ML podem ser automatizados como Workflows com Jobs, e muitos pipelines de ML centrados em dados podem usar o Auto Loader mais especializado para ingerir imagens e outros dados e Delta Live Tables para computar features ou monitorar métricas.\n\nDocs Terraform",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-10",
        "identifier": "OE-02-10",
        "principle": "Automatizar implantações e cargas de trabalho",
        "title": "Usar frameworks declarativos para MLOps",
        "capabilities": "Databricks Asset Bundles",
        "details": "Frameworks declarativos dentro de MLOps permitem que equipes definam resultados desejados em termos de alto nível, deixando o sistema lidar com os detalhes de execução, simplificando assim a implantação e o dimensionamento de modelos de ML. Esses frameworks suportam integração e entrega contínuas, automatizam testes e gerenciamento de infraestrutura, e garantem governança e conformidade de modelos, acelerando o tempo de lançamento no mercado e aumentando a produtividade em todo o ciclo de vida de ML.\n\nDatabricks Asset Bundles (DABs) são uma nova ferramenta para otimizar o desenvolvimento de projetos complexos de dados, analytics e ML para a plataforma Databricks. Os Bundles facilitam o gerenciamento de projetos complexos durante o desenvolvimento ativo, fornecendo recursos de CI/CD em seu fluxo de trabalho de desenvolvimento de software com uma sintaxe YAML concisa e declarativa única. Ao usar bundles para automatizar os testes, implantações e gerenciamento de configuração do seu projeto, você pode reduzir erros enquanto promove as melhores práticas de software em toda a sua organização como projetos modelados.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-02-11",
        "identifier": "OE-02-11",
        "principle": "Automatizar implantações e cargas de trabalho",
        "title": "Automatizar avaliação de LLM",
        "capabilities": null,
        "details": "O recurso 'LLM-as-a-judge' no MLflow 2.8 automatiza a avaliação de LLM, oferecendo uma alternativa prática ao julgamento humano. Ele é projetado para ser eficiente e econômico, mantendo consistência com pontuações humanas. Esta ferramenta suporta várias métricas, incluindo métricas GenAI padrão e personalizáveis, e permite que os usuários selecionem um LLM como juiz e definam critérios de avaliação específicos.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-03-01",
        "identifier": "OE-03-01",
        "principle": "Configurar Monitoramento, Alertas e Registro",
        "title": "Monitorar jobs e dados",
        "capabilities": "Databricks Platform",
        "details": "O monitoramento fornece informações importantes sobre jobs e dados que podem ajudar a orientar a tomada de decisões quando um job falha ou dados estão faltando - bem como alertas quando esses eventos ocorrem, para que você possa tomar ações oportunas.\n\nVocê pode rastrear métricas como o número de jobs com falha, tabelas que não estão recebendo dados, o timestamp mais recente de ingestão, taxa de ingestão de tabelas e o tempo de execução de consultas.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-03-02",
        "identifier": "OE-03-02",
        "principle": "Configurar Monitoramento, Alertas e Registro",
        "title": "Usar ferramentas nativas e externas para monitoramento",
        "capabilities": "Databricks Lakehouse Monitoring; Cloud Provided Tooling; Databricks SQL Alerts",
        "details": "Usar ferramentas nativas e externas para monitoramento fornece informações sobre seus dados e cargas de trabalho que podem ajudar a identificar um problema potencial antes que ele ocorra.\n\nIntegração com Serviços de Monitoramento em Nuvem:\n- Para Databricks na AWS, você pode integrar com Amazon CloudWatch para monitorar seu ambiente Databricks. O CloudWatch permite derivar métricas de logs e configurar alertas.\n- Da mesma forma, para Azure Databricks, você pode usar o Azure Monitor para enviar dados de monitoramento do Databricks e configurar recursos avançados de monitoramento e alertas.\n\nDatabricks Lakehouse Monitoring: Este recurso permite monitorar as propriedades estatísticas e a qualidade dos dados em todas as tabelas da sua conta. Também permite rastrear o desempenho de modelos de machine learning monitorando tabelas de inferência que contêm entradas e previsões do modelo.\nAWS | Azure | GCP\n\nAlertas do Databricks SQL podem monitorar a tabela de métricas para condições baseadas em segurança, garantindo integridade de dados e resposta oportuna a problemas potenciais:\n- Alerta de faixa estatística: Dispara quando uma estatística específica, como a fração de valores ausentes, excede um limite predeterminado\n- Alerta de mudança de distribuição de dados: Ativa mediante mudanças na distribuição de dados, conforme indicado pela tabela de métricas de drift\n- Alerta de divergência de baseline: Alerta se os dados divergirem significativamente de um baseline\nAWS | Azure | GCP\n\nMonitoramento de pipeline Delta Live Tables: Use recursos integrados no Delta Live Tables para monitoramento e observabilidade de pipelines, incluindo linhagem de dados, histórico de atualizações e relatórios de qualidade de dados.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-03-03",
        "identifier": "OE-03-03",
        "principle": "Configurar Monitoramento, Alertas e Registro",
        "title": "Ter estratégia de resposta a incidentes",
        "capabilities": null,
        "details": "É crítico ter uma estratégia de resposta a incidentes para minimizar o risco de interrupção de negócios e danos financeiros, operacionais e de reputação à sua organização.\n\nIsso inclui entender o processo para enviar um ticket de suporte ao Databricks e o processo de escalonamento, bem como ter isso documentado para referência de sua organização mais ampla.\n\nO Databricks regularmente fornece previews para dar a você a chance de avaliar e fornecer feedback sobre recursos antes de estarem geralmente disponíveis (GA). Os previews vêm em vários graus de maturidade com diferentes opções de suporte baseadas no tipo de lançamento. Esta documentação descreve os detalhes de suporte para cada tipo de lançamento.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-03-04",
        "identifier": "OE-03-04",
        "principle": "Configurar Monitoramento, Alertas e Registro",
        "title": "Automatizar ações baseadas em eventos",
        "capabilities": null,
        "details": "Disparar ações em resposta a eventos específicos ajuda a automatizar processos e minimizar a necessidade de gerenciar modelos e fluxos de trabalho manualmente.\n\nWebhooks no MLflow Model Registry permitem automatizar o fluxo de trabalho de machine learning disparando ações em resposta a eventos específicos. Esses webhooks facilitam integrações perfeitas, permitindo a execução automática de vários processos. Por exemplo, webhooks são usados para:\n- Disparo de fluxo de trabalho CI: Validar seu modelo automaticamente ao criar uma nova versão\n- Notificações de equipe: Enviar alertas através de um aplicativo de mensagens quando uma solicitação de transição de estágio do modelo é recebida\n- Avaliação de equidade do modelo: Invocar um fluxo de trabalho para avaliar a equidade e viés do modelo mediante uma solicitação de transição para produção\n- Implantação automatizada: Disparar um pipeline de implantação quando uma nova tag é criada em um modelo\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-04-01",
        "identifier": "OE-04-01",
        "principle": "Gerenciar capacidade e cotas",
        "title": "Gerenciar limites e cotas de serviços",
        "capabilities": "Cloud; Databricks Platform",
        "details": "Gerenciar limites e cotas de serviços é importante para manter uma infraestrutura funcionando bem e prevenir custos inesperados. Eles previnem provisionamento acidental de mais recursos do que o necessário e limitam solicitações de API. Como resultado, também protegem contra incidentes de segurança potenciais que podem aumentar as contas.\n\nTodo serviço lançado em uma nuvem terá que levar em conta limites, como limites de taxa de acesso, número de instâncias, número de usuários e requisitos de memória. Para seu provedor de nuvem, verifique os limites da nuvem. Antes de projetar uma solução, esses limites devem ser compreendidos.\nAWS | Azure | GCP\n\nLimites da plataforma Databricks: Estes são limites específicos para recursos do Databricks. Os limites para a plataforma geral estão documentados em Limites.\nAWS | Azure | GCP\n\nLimites do Unity Catalog: Cotas de Recursos do Unity Catalog\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "OE-04-02",
        "identifier": "OE-04-02",
        "principle": "Gerenciar capacidade e cotas",
        "title": "Planejar capacidade",
        "capabilities": "Databricks Platform",
        "details": "O planejamento de capacidade envolve gerenciar recursos de nuvem, como armazenamento, computação e rede para manter o desempenho enquanto otimiza custos.\n\nCompreender e planejar eventos de alta prioridade (volume) é importante. Se os recursos de nuvem provisionados não forem suficientes e as cargas de trabalho não puderem escalar, tais aumentos no volume causarão uma interrupção.\n\nPlaneje para flutuações na carga esperada que podem ocorrer por vários motivos, como mudanças súbitas de negócios ou mesmo eventos mundiais. Teste variações de carga, incluindo inesperadas, para garantir que suas cargas de trabalho possam escalar. Garanta que todas as regiões possam escalar adequadamente para suportar a carga total se uma região falhar. A serem considerados:\n\n- Limites e limitações de tecnologia e serviço da nuvem.\n- SLAs ao determinar os serviços a usar no design.\n- Análise de custos para determinar quanta melhoria será realizada no aplicativo se os custos aumentarem.",
        "type": "status",
        "status": "open"
      }
    ]
  },
  {
    "id": "security-compliance-privacy",
    "name": "Segurança, Conformidade e Privacidade",
    "description": "Proteger dados e sistemas contra ameaças enquanto mantém conformidade regulatória e padrões de privacidade.",
    "questions": [
      {
        "id": "SCP-01-01",
        "identifier": "SCP-01-01",
        "principle": "Gerenciar identidade e acesso usando privilégio mínimo",
        "title": "Configurar Single Sign-On (SSO)",
        "capabilities": "Databricks SSO",
        "details": "O Single Sign-On permite autenticar seus usuários usando o provedor de identidade da sua organização. O Databricks recomenda configurar SSO para maior segurança e melhor usabilidade. Uma vez configurado o SSO, você pode habilitar controle de acesso refinado, como autenticação multifator, através do seu provedor de identidade. O login unificado permite gerenciar uma configuração SSO na sua conta que é usada para a conta e workspaces do Databricks. Se sua conta foi criada antes de 21 de junho de 2023, você também pode gerenciar o SSO individualmente na sua conta e workspaces.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-02",
        "identifier": "SCP-01-02",
        "principle": "Gerenciar identidade e acesso usando privilégio mínimo",
        "title": "Usar autenticação multifator (MFA)",
        "capabilities": "Databricks SSO",
        "details": "Use MFA com seu provedor de identidade e use SSO com o Databricks.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-03",
        "identifier": "SCP-01-03",
        "principle": "Gerenciar identidade e acesso usando privilégio mínimo",
        "title": "Usar SSO para eliminar senhas locais",
        "capabilities": "Databricks SSO",
        "details": "Use SSO com o Databricks para garantir que nenhuma senha local seja usada. Para administradores, use uma política de senha.\nO Databricks permite definir uma política de senha para todos os usuários, incluindo o Proprietário da Conta. Você pode definir requisitos de comprimento, complexidade e regras de expiração para garantir que as senhas sejam seguras e atualizadas regularmente.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-04",
        "identifier": "SCP-01-04",
        "principle": "Gerenciar identidade e acesso usando privilégio mínimo",
        "title": "Configurar política de senha",
        "capabilities": "Databricks SSO",
        "details": "Política de senha: O Databricks permite definir uma política de senha para todos os usuários, incluindo o Proprietário da Conta. Você pode definir requisitos de comprimento, complexidade e regras de expiração para garantir que as senhas sejam seguras e atualizadas regularmente.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-05",
        "identifier": "SCP-01-05",
        "principle": "Gerenciar identidade e acesso usando privilégio mínimo",
        "title": "Gerenciar privilégios de administrador",
        "capabilities": "Databricks Admin",
        "details": "Existem dois níveis principais de privilégios de administrador disponíveis na plataforma Databricks:\n\nAdministradores de conta: Gerenciam a conta Databricks, incluindo criação de workspace, gerenciamento de usuários, recursos de nuvem e monitoramento de uso da conta.\nAWS | Azure | GCP\n\nAdministradores de workspace: Gerenciam identidades do workspace, controle de acesso, configurações e recursos para workspaces individuais na conta.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-06",
        "identifier": "SCP-01-06",
        "principle": "Gerenciar identidade e acesso usando privilégio mínimo",
        "title": "Gerenciar tokens de acesso pessoal",
        "capabilities": "Token Management",
        "details": "Quando tokens de acesso pessoal estão habilitados em um workspace, usuários com permissão CAN USE podem gerar tokens de acesso pessoal para acessar APIs REST do Databricks, e podem gerar esses tokens com qualquer data de expiração que desejarem, incluindo tempo de vida indefinido. Por padrão, nenhum usuário não-admin do workspace tem permissão CAN USE, o que significa que eles não podem criar ou usar tokens de acesso pessoal.\n\nComo administrador de workspace do Databricks, você pode desabilitar tokens de acesso pessoal para um workspace, monitorar e revogar tokens, controlar quais usuários não-admin podem criar e usar tokens, e definir um tempo de vida máximo para novos tokens.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-07",
        "identifier": "SCP-01-07",
        "principle": "Gerenciar identidade e acesso usando privilégio mínimo",
        "title": "Configurar sincronização SCIM",
        "capabilities": "Scim Sync",
        "details": "O SCIM permite usar um provedor de identidade (IdP) para criar usuários no Databricks, dar-lhes o nível adequado de acesso e remover o acesso (desprovisioná-los) quando eles saem da sua organização ou não precisam mais de acesso ao Databricks.\n\nVocê pode usar um conector de provisionamento SCIM no seu IdP ou invocar as APIs SCIM de Gerenciamento de Identidade e Acesso para gerenciar o provisionamento. Você também pode usar essas APIs para gerenciar identidades no Databricks diretamente, sem um IdP.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-08",
        "identifier": "SCP-01-08",
        "principle": "Gerenciar identidade e acesso usando privilégio mínimo",
        "title": "Usar políticas de cluster",
        "capabilities": "Databricks Cluster Policies",
        "details": "Uma política é uma ferramenta que os administradores de workspace podem usar para limitar as permissões de criação de computação de um usuário ou grupo com base em um conjunto de regras de política.\nAs políticas fornecem os seguintes benefícios:\n\nLimitar usuários a criar clusters com configurações prescritas.\nLimitar usuários a criar um certo número de clusters.\nSimplificar a interface do usuário e permitir que mais usuários criem seus próprios clusters (fixando e ocultando alguns valores).\nControlar custos limitando o custo máximo por cluster (definindo limites em atributos cujos valores contribuem para o preço por hora).\nAplicar instalações de bibliotecas com escopo de cluster (Preview Público).\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-09",
        "identifier": "SCP-01-09",
        "principle": "Gerenciar identidade e acesso usando privilégio mínimo",
        "title": "Usar gerenciamento de segredos",
        "capabilities": "Databricks Secret Management",
        "details": "https://docs.databricks.com/en/security/secrets/index.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-10",
        "identifier": "SCP-01-10",
        "principle": "Gerenciar identidade e acesso usando privilégio mínimo",
        "title": "Configurar permissões de nuvem com privilégio mínimo",
        "capabilities": null,
        "details": "https://docs.databricks.com/en/administration-guide/cloud-configurations/aws/permissions.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-11",
        "identifier": "SCP-01-11",
        "principle": "Gerenciar identidade e acesso usando privilégio mínimo",
        "title": "Usar login único (SSO) para autenticação",
        "capabilities": "Databricks SSO",
        "details": "O Single Sign-On permite autenticar seus usuários usando o provedor de identidade da sua organização. O Databricks recomenda configurar SSO para maior segurança e melhor usabilidade. Uma vez configurado o SSO, você pode habilitar controle de acesso refinado, como autenticação multifator, através do seu provedor de identidade. O login unificado permite gerenciar uma configuração SSO na sua conta que é usada para a conta e workspaces do Databricks. Se sua conta foi criada antes de 21 de junho de 2023, você também pode gerenciar o SSO individualmente na sua conta e workspaces.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-12",
        "identifier": "SCP-01-12",
        "principle": "Gerenciar identidade e acesso usando privilégio mínimo",
        "title": "Configurar modo de acesso de computação",
        "capabilities": "Unity Catalog",
        "details": "O modo de acesso é um recurso de segurança que determina quem pode usar a computação e quais dados podem acessar através da computação. Cada computação no Databricks tem um modo de acesso.\n\nO Databricks recomenda usar o modo de acesso compartilhado para todas as cargas de trabalho. Use apenas o modo de acesso de usuário único se a funcionalidade necessária não for suportada pelo modo de acesso compartilhado.\n\nAWS | Azure | GCP\nBlog\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-13",
        "identifier": "SCP-01-13",
        "principle": "Gerenciar identidade e acesso usando privilégio mínimo",
        "title": "Usar service principals para automação",
        "capabilities": "Unity Catalog",
        "details": "Um service principal é uma identidade que você cria no Databricks para uso com ferramentas automatizadas, jobs e aplicações. Service principals dão a ferramentas automatizadas e scripts acesso somente via API aos recursos do Databricks, proporcionando maior segurança do que usar usuários ou grupos.\n\nVocê pode conceder e restringir o acesso de um service principal a recursos da mesma forma que pode fazer com um usuário Databricks. Por exemplo, você pode:\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-02-01",
        "identifier": "SCP-02-01",
        "principle": "Proteger dados em trânsito e em repouso",
        "title": "Evitar armazenar dados sensíveis no DBFS root",
        "capabilities": "Databricks Workspace",
        "details": "Como o DBFS root é acessível a todos os usuários em um workspace, todos os usuários podem acessar quaisquer dados armazenados lá. É importante instruir os usuários a evitar usar esta localização para armazenar dados sensíveis. A localização padrão para tabelas gerenciadas no Hive metastore no Databricks é o DBFS root; para evitar que usuários finais que criam tabelas gerenciadas escrevam no DBFS root, declare uma localização em armazenamento externo ao criar bancos de dados no Hive metastore.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-02-02",
        "identifier": "SCP-02-02",
        "principle": "Proteger dados em trânsito e em repouso",
        "title": "Usar Unity Catalog para gerenciar acesso ao armazenamento em nuvem",
        "capabilities": "Unity Catalog",
        "details": "O Databricks recomenda usar o Unity Catalog para gerenciar o acesso a todos os dados armazenados em armazenamento de objetos na nuvem. O Unity Catalog fornece um conjunto de ferramentas para configurar conexões seguras ao armazenamento de objetos na nuvem.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-02-03",
        "identifier": "SCP-02-03",
        "principle": "Proteger dados em trânsito e em repouso",
        "title": "Implementar proteção contra exfiltração de dados",
        "capabilities": "Databricks Workspace",
        "details": "https://www.databricks.com/blog/2021/02/02/data-exfiltration-protection-with-databricks-on-aws.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-02-04",
        "identifier": "SCP-02-04",
        "principle": "Proteger dados em trânsito e em repouso",
        "title": "Usar versionamento de bucket S3 para redundância adicional",
        "capabilities": "Cloud",
        "details": "Você pode usar o versionamento de bucket S3 para fornecer redundância adicional para dados armazenados com Delta Lake. O Databricks recomenda implementar uma política de gerenciamento de ciclo de vida para todos os buckets S3 com versionamento habilitado. O Databricks recomenda manter três versões.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-02-05",
        "identifier": "SCP-02-05",
        "principle": "Proteger dados em trânsito e em repouso",
        "title": "Usar localizações externas para controle de acesso",
        "capabilities": "Unity Catalog",
        "details": "Uma localização externa é um objeto que combina um caminho de armazenamento em nuvem com uma credencial de armazenamento que autoriza o acesso ao caminho de armazenamento em nuvem. Cada localização de armazenamento está sujeita às políticas de controle de acesso do Unity Catalog que controlam quais usuários e grupos podem acessar a credencial. Se um usuário não tiver acesso a uma localização de armazenamento no Unity Catalog, a solicitação falha e o Unity Catalog não tenta autenticar no seu tenant de nuvem em nome do usuário.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-02-06",
        "identifier": "SCP-02-06",
        "principle": "Proteger dados em trânsito e em repouso",
        "title": "Usar chaves gerenciadas pelo cliente para criptografia",
        "capabilities": "Unity Catalog",
        "details": "O Databricks tem dois casos de uso de chaves gerenciadas pelo cliente que envolvem diferentes tipos de dados e localizações:\n\nServiços gerenciados: Dados no plano de controle do Databricks (notebooks, segredos e dados de consulta do Databricks SQL).\nArmazenamento do workspace: Seus buckets S3 raiz do workspace e os volumes EBS de recursos de computação no plano de computação clássico.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-02-07",
        "identifier": "SCP-02-07",
        "principle": "Proteger dados em trânsito e em repouso",
        "title": "Configurar proteção contra exfiltração de dados na rede",
        "capabilities": "Databricks Workspace",
        "details": "https://www.databricks.com/blog/2021/02/02/data-exfiltration-protection-with-databricks-on-aws.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-03-01",
        "identifier": "SCP-03-01",
        "principle": "Proteger sua rede e identificar e proteger endpoints",
        "title": "Usar VPC gerenciada pelo cliente",
        "capabilities": "Cloud",
        "details": "Por padrão, clusters são criados em uma única AWS VPC (Virtual Private Cloud) que o Databricks cria e configura na sua conta AWS. Você pode opcionalmente criar seus workspaces Databricks na sua própria VPC, um recurso conhecido como VPC gerenciada pelo cliente. Você pode usar uma VPC gerenciada pelo cliente para exercer mais controle sobre suas configurações de rede para cumprir padrões específicos de segurança e governança de nuvem que sua organização pode exigir. Para configurar seu workspace para usar AWS Private Link para qualquer tipo de conexão, seu workspace deve usar uma VPC gerenciada pelo cliente.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-03-02",
        "identifier": "SCP-03-02",
        "principle": "Proteger sua rede e identificar e proteger endpoints",
        "title": "Configurar listas de acesso IP",
        "capabilities": "Cloud",
        "details": "https://docs.databricks.com/en/security/network/front-end/ip-access-list.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-03-03",
        "identifier": "SCP-03-03",
        "principle": "Proteger sua rede e identificar e proteger endpoints",
        "title": "Implementar controles de exfiltração de rede",
        "capabilities": "Cloud",
        "details": "https://www.databricks.com/blog/2021/02/02/data-exfiltration-protection-with-databricks-on-aws.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-03-04",
        "identifier": "SCP-03-04",
        "principle": "Proteger sua rede e identificar e proteger endpoints",
        "title": "Implementar políticas de acesso privado ao console",
        "capabilities": "Databricks Workspace",
        "details": "https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/implementing-console-private-access-policies.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-03-05",
        "identifier": "SCP-03-05",
        "principle": "Proteger sua rede e identificar e proteger endpoints",
        "title": "Configurar políticas de acesso a endpoints VPC",
        "capabilities": "IP access List",
        "details": "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-access.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-03-06",
        "identifier": "SCP-03-06",
        "principle": "Proteger sua rede e identificar e proteger endpoints",
        "title": "Usar Private Link para conectividade segura",
        "capabilities": "Private link",
        "details": "https://docs.databricks.com/en/security/network/classic/privatelink.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-04-01",
        "identifier": "SCP-04-01",
        "principle": "Revisar o Modelo de Responsabilidade Compartilhada",
        "title": "Entender o modelo de responsabilidade compartilhada",
        "capabilities": "Shared Responsibility Model",
        "details": "O modelo de responsabilidade compartilhada do Databricks descreve as obrigações de segurança e conformidade do Databricks, do provedor de serviços em nuvem e do cliente em relação aos dados e serviços na plataforma Databricks.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-05-01",
        "identifier": "SCP-05-01",
        "principle": "Atender requisitos de conformidade e privacidade de dados",
        "title": "Seguir o guia de segurança e conformidade",
        "capabilities": "Security and Compliance Guide",
        "details": "https://docs.databricks.com/en/security/index.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-06-01",
        "identifier": "SCP-06-01",
        "principle": "Monitorar segurança do sistema",
        "title": "Usar ferramentas de observabilidade como Overwatch",
        "capabilities": "Unity Catalog",
        "details": "https://community.databricks.com/t5/technical-blog/overwatch-the-observability-tool-for-databricks/ba-p/54120",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-06-02",
        "identifier": "SCP-06-02",
        "principle": "Monitorar segurança do sistema",
        "title": "Usar tabelas de sistema para logs de auditoria",
        "capabilities": "Unity Catalog",
        "details": "https://docs.databricks.com/en/administration-guide/system-tables/audit-logs.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-06-03",
        "identifier": "SCP-06-03",
        "principle": "Monitorar segurança do sistema",
        "title": "Analisar logs de auditoria regularmente",
        "capabilities": "Unity Catalog",
        "details": "https://docs.databricks.com/en/administration-guide/system-tables/audit-logs.html",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-06-04",
        "identifier": "SCP-06-04",
        "principle": "Monitorar segurança do sistema",
        "title": "Usar perfil de segurança de conformidade",
        "capabilities": "Databricks Compliance security profile",
        "details": "O Enhanced Security Monitoring (ESM) e o Compliance Security Profile (CSP) fornecem a base de segurança mais segura para implantações do Databricks.\nO Enhanced Security Monitoring fornece:\n1. Uma AMI com hardening CIS Level 1 aprimorado\n2. Monitoramento de malware baseado em comportamento e monitoramento de integridade de arquivos (Capsule8)\n3. Detecção de malware e antivírus (ClamAV)\n4. Relatórios de vulnerabilidade Qualys de um host OS representativo\nO Compliance Security Profile pega todos os benefícios acima e adiciona controles de segurança adicionais necessários para atender aos requisitos de conformidade:\n1. Módulos de criptografia validados FIPS 140-2 Level 1 (onde possível)\n2. Aplicação de AWS Nitro VM para criptografia de dados em repouso e em trânsito\n3. Aplicação de atualização de cluster (reinício automático após 25 dias)\n4. Recursos e controles compatíveis com HIPAA, PCI-DSS, FedRAMP Moderate\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-06-05",
        "identifier": "SCP-06-05",
        "principle": "Monitorar segurança do sistema",
        "title": "Usar tags para rastrear uso e faturamento",
        "capabilities": "Tagging",
        "details": "Para rastrear o uso do Databricks através do faturamento de recursos AWS, você pode configurar tags em clusters ou pools. Estas também podem ser aplicadas via políticas de cluster para diferentes grupos dentro da sua organização.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-07-01",
        "identifier": "SCP-07-01",
        "principle": "Controles genéricos",
        "title": "Usar instâncias AWS Nitro para segurança aprimorada",
        "capabilities": "Databricks Compliance security profile",
        "details": "As instâncias AWS Nitro podem fornecer dois grandes benefícios de segurança:\n1. As instâncias AWS Nitro usam discos NVMe que criptografam automaticamente dados em repouso. Da documentação da AWS de 19 de julho de 2021:\nOs dados no armazenamento de instância NVMe são criptografados usando uma cifra de bloco XTS-AES-256 implementada em um módulo de hardware na instância. As chaves de criptografia são geradas usando o módulo de hardware e são únicas para cada dispositivo de armazenamento de instância NVMe. Todas as chaves de criptografia são destruídas quando a instância é parada ou terminada e não podem ser recuperadas. Você não pode desabilitar esta criptografia e não pode fornecer sua própria chave de criptografia.\n2. Muitas instâncias AWS Nitro também criptografam automaticamente dados em trânsito entre hosts. Você pode configurar tipos de instância incluídos na seção Encryption in Transit da documentação do AWS Nitro para que o tráfego intra-cluster (inter-host) seja criptografado em trânsito.\nO Databricks não pode fornecer autoridade sobre detalhes de capacidades na AWS, e as informações acima são fornecidas com o melhor esforço como conveniência para clientes do Databricks.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-07-02",
        "identifier": "SCP-07-02",
        "principle": "Controles genéricos",
        "title": "Entender cotas e limites da plataforma",
        "capabilities": "Databricks Quotas",
        "details": "Todo serviço lançado em uma nuvem terá que levar em conta limites, como limites de taxa de acesso, número de instâncias, número de usuários e requisitos de memória. Para seu provedor de nuvem, verifique os limites da nuvem. Antes de projetar uma solução, esses limites devem ser compreendidos.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-07-03",
        "identifier": "SCP-07-03",
        "principle": "Controles genéricos",
        "title": "Usar CI/CD com verificação de código para cargas de trabalho sensíveis",
        "capabilities": "Cloud",
        "details": "Organizações maduras frequentemente constroem cargas de trabalho de produção usando CI/CD para integrar verificação de código, melhor controle de permissões, realizar linting e mais. Quando há dados altamente sensíveis sendo analisados, um processo de CI/CD também pode permitir a verificação de cenários conhecidos, como segredos codificados.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-07-04",
        "identifier": "SCP-07-04",
        "principle": "Controles genéricos",
        "title": "Usar isolamento de workspace para cargas de trabalho sensíveis",
        "capabilities": "Databricks Workspace",
        "details": "Embora o Databricks tenha inúmeras capacidades para isolar diferentes cargas de trabalho, como ACLs de tabela e IAM passthrough para cargas de trabalho muito sensíveis, o método de isolamento principal é mover cargas de trabalho sensíveis para um workspace diferente. Isso às vezes acontece quando um cliente tem equipes muito diferentes (por exemplo, uma equipe de segurança e uma equipe de marketing) que devem analisar dados diferentes no Databricks.\n\nBlog",
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-07-05",
        "identifier": "SCP-07-05",
        "principle": "Controles genéricos",
        "title": "Hospedar repositórios próprios de bibliotecas para ataques à cadeia de suprimentos",
        "capabilities": "Databricks Libraries",
        "details": "Por padrão, o Databricks permite que clientes instalem bibliotecas Python, R ou Scala dos repositórios públicos padrão, como pypi, CRAN ou maven.\nAqueles que estão preocupados com ataques à cadeia de suprimentos podem hospedar seus próprios repositórios e então configurar o Databricks para usá-los. Você pode bloquear o acesso a outras fontes de bibliotecas. A documentação para fazer isso está fora do escopo deste documento, mas entre em contato com sua equipe Databricks para assistência conforme necessário.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      }
    ]
  },
  {
    "id": "reliability",
    "name": "Confiabilidade",
    "description": "Recuperar-se de falhas e continuar funcionando com mínimo tempo de inatividade e perda de dados.",
    "questions": [
      {
        "id": "R-01-01",
        "identifier": "R-01-01",
        "principle": "Projetar para tolerância a falhas",
        "title": "Usar formato de dados com suporte a transações ACID",
        "capabilities": "Delta Lake",
        "details": "Delta Lake é um formato de armazenamento open source que traz confiabilidade para data lakes. Delta Lake fornece transações ACID, aplicação de esquema, manipulação escalável de metadados e unifica processamento de dados em streaming e batch. Delta Lake roda sobre seu data lake existente e é totalmente compatível com APIs do Apache Spark. Delta Lake no Databricks permite configurar o Delta Lake baseado nos padrões da sua carga de trabalho.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-01-02",
        "identifier": "R-01-02",
        "principle": "Projetar para tolerância a falhas",
        "title": "Usar um motor de dados distribuído resiliente para todas as cargas de trabalho",
        "capabilities": "Apache Spark; Photon",
        "details": "Apache Spark, como motor de computação do lakehouse Databricks, é baseado em processamento de dados distribuído resiliente. Em caso de uma tarefa interna do Spark não retornar um resultado conforme esperado, o Apache Spark automaticamente reagenda as tarefas faltantes e continua com a execução do job completo. Isso é útil para falhas fora do código, como um problema de rede curto ou uma VM spot revogada. Trabalhar tanto com a API SQL quanto com a API DataFrame do Spark vem com essa resiliência embutida no motor.\n\nNo lakehouse Databricks, Photon, um motor vetorizado nativo escrito inteiramente em C++, é computação de alto desempenho compatível com APIs do Apache Spark.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-01-03",
        "identifier": "R-01-03",
        "principle": "Projetar para tolerância a falhas",
        "title": "Resgatar automaticamente dados inválidos ou não conformes",
        "capabilities": "Delta Live Tables",
        "details": "Dados inválidos ou não conformes podem levar a travamentos de cargas de trabalho que dependem de um formato de dados estabelecido. Para aumentar a resiliência ponta a ponta de todo o processo, é melhor prática filtrar dados inválidos e não conformes na ingestão. Suportar dados resgatados garante que você nunca perca ou fique sem dados durante a ingestão ou ETL. A coluna de dados resgatados contém quaisquer dados que não foram parseados, seja porque estava faltando no esquema fornecido, porque havia uma incompatibilidade de tipo, ou o case da coluna no registro ou arquivo não correspondia ao do esquema.\n\nAWS | Azure | GCP\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-01-04",
        "identifier": "R-01-04",
        "principle": "Projetar para tolerância a falhas",
        "title": "Configurar jobs para retentativas automáticas e terminação",
        "capabilities": "Databricks Workflows",
        "details": "Sistemas distribuídos são complexos, e uma falha em um ponto pode potencialmente se propagar por todo o sistema.\n\nJobs do Databricks suportam uma política de retentativa automática que determina quando e quantas vezes execuções falhas são retentadas.\n\nDelta Live Tables também automatiza a recuperação de falhas usando retentativas escalonadas para equilibrar velocidade com confiabilidade. Veja Modos de desenvolvimento e produção.\n\nPor outro lado, uma tarefa que trava pode impedir o job inteiro de terminar, incorrendo em altos custos. Jobs do Databricks suportam uma configuração de timeout para terminar jobs que demoram mais que o esperado.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-01-05",
        "identifier": "R-01-05",
        "principle": "Projetar para tolerância a falhas",
        "title": "Usar infraestrutura de serving de modelos escalável e pronta para produção",
        "capabilities": "Databricks Model Serving",
        "details": "Para inferência batch e streaming, use jobs Databricks e MLflow para implantar modelos como UDFs do Apache Spark para aproveitar agendamento de jobs, retentativas, auto-scaling, etc.\nModel Serving fornece uma infraestrutura de serving de modelos em tempo real escalável e pronta para produção. Ele processa seus modelos de machine learning usando MLflow e os expõe como endpoints de API REST. Esta funcionalidade usa computação serverless, o que significa que os endpoints e recursos de computação associados são gerenciados e executados na conta de nuvem do Databricks.\n\nAWS | Azure | GCP\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-01-06",
        "identifier": "R-01-06",
        "principle": "Projetar para tolerância a falhas",
        "title": "Usar serviços gerenciados para suas cargas de trabalho",
        "capabilities": "Databricks Platform",
        "details": "Aproveite os serviços gerenciados da Plataforma de Inteligência de Dados Databricks como computação serverless, model serving ou Delta Live Tables onde possível. Esses serviços são - sem esforço extra do cliente - operados pelo Databricks de forma confiável e escalável, tornando as cargas de trabalho mais confiáveis.\n\nAWS | Azure | GCP\nAWS | Azure | GCP\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-02-01",
        "identifier": "R-02-01",
        "principle": "Gerenciar qualidade de dados",
        "title": "Usar arquitetura de armazenamento em camadas",
        "capabilities": "Databricks Lakehouse Architecture",
        "details": "Curar dados criando uma arquitetura em camadas e garantindo que a qualidade dos dados aumente à medida que os dados se movem através das camadas. Uma abordagem comum de camadas é:\n\nCamada bruta (bronze): Os dados de origem são ingeridos no lakehouse na primeira camada e devem ser persistidos lá. Quando todos os dados downstream são criados a partir da camada bruta, reconstruir as camadas subsequentes a partir desta camada é possível se necessário.\n\nCamada curada (silver): O propósito da segunda camada é manter dados limpos, refinados, filtrados e agregados. O objetivo desta camada é fornecer uma base sólida e confiável para análises e relatórios em todas as funções e papéis.\n\nCamada final (gold): A terceira camada é criada em torno das necessidades de negócios ou projetos. Ela fornece uma visão diferente como produtos de dados para outras unidades de negócios ou projetos, preparando dados em torno de necessidades de segurança (como dados anonimizados) ou otimizando para desempenho (como com visualizações pré-agregadas). Os produtos de dados nesta camada são vistos como a verdade para o negócio.\n\nA camada final deve conter apenas dados de alta qualidade e pode ser totalmente confiada do ponto de vista de negócios.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-02-02",
        "identifier": "R-02-02",
        "principle": "Gerenciar qualidade de dados",
        "title": "Melhorar integridade de dados reduzindo redundância",
        "capabilities": "Databricks Platform",
        "details": "Copiar ou duplicar dados cria redundância de dados e levará à perda de integridade, perda de linhagem de dados e frequentemente diferentes permissões de acesso. Isso diminuirá a qualidade dos dados no lakehouse. Uma cópia temporária ou descartável de dados não é prejudicial por si só - às vezes é necessária para impulsionar agilidade, experimentação e inovação. No entanto, se essas cópias se tornarem operacionais e regularmente usadas para decisões de negócios, elas se tornam silos de dados. Esses silos de dados ficando dessincronizados têm um impacto negativo significativo na integridade e qualidade dos dados, levantando questões como 'Qual conjunto de dados é o mestre?' ou 'O conjunto de dados está atualizado?'.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-02-03",
        "identifier": "R-02-03",
        "principle": "Gerenciar qualidade de dados",
        "title": "Gerenciar schemas ativamente",
        "capabilities": "Unity Catalog",
        "details": "Mudanças de schema não controladas podem levar a dados inválidos e jobs falhando que usam esses conjuntos de dados. O Databricks tem vários métodos para validar e aplicar o schema:\n\nO Delta Lake suporta validação de schema e aplicação de schema manipulando automaticamente variações de schema para evitar a inserção de registros ruins durante a ingestão.\n\nO Auto Loader detecta a adição de novas colunas à medida que processa seus dados. Por padrão, a adição de uma nova coluna faz com que suas streams parem com uma UnknownFieldException. O Auto Loader suporta vários modos para evolução de schema.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-02-04",
        "identifier": "R-02-04",
        "principle": "Gerenciar qualidade de dados",
        "title": "Usar constraints e expectations de dados",
        "capabilities": "Delta Live Tables",
        "details": "As tabelas Delta suportam cláusulas padrão de gerenciamento de constraints SQL que garantem que a qualidade e integridade dos dados adicionados a uma tabela sejam automaticamente verificadas. Quando um constraint é violado, o Delta Lake lança um erro InvariantViolationException para sinalizar que os novos dados não podem ser adicionados. Veja Constraints no Databricks.\n\nPara melhorar ainda mais este tratamento, o Delta Live Tables suporta Expectations: Expectations definem constraints de qualidade de dados no conteúdo de um conjunto de dados. Uma expectation consiste em uma descrição, um invariante e uma ação a ser tomada quando um registro falha no invariante. Expectations para consultas usam decoradores Python ou cláusulas de constraint SQL. Veja Manage data quality with Delta Live Tables.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-02-05",
        "identifier": "R-02-05",
        "principle": "Gerenciar qualidade de dados",
        "title": "Adotar abordagem centrada em dados para machine learning",
        "capabilities": "Databricks Platform",
        "details": "Um princípio orientador que continua no coração da visão de IA para a Plataforma de Inteligência de Dados Databricks é adotar uma abordagem centrada em dados para machine learning. Com a crescente prevalência de IA generativa, essa perspectiva permanece igualmente importante. Os componentes centrais de qualquer projeto de ML podem ser vistos simplesmente como pipelines de dados.\n\nPipelines de engenharia de features, treinamento, inferência e monitoramento são pipelines de dados. Eles devem ser tão robustos quanto outros processos de engenharia de dados de produção. A qualidade dos dados é crucial em qualquer aplicação de ML, então os pipelines de dados de ML devem empregar abordagens sistemáticas para monitorar e mitigar problemas de qualidade de dados. Evite ferramentas que dificultam a junção de dados de previsões de ML, monitoramento de modelos, etc., com o resto dos seus dados. A maneira mais simples de alcançar isso é desenvolver aplicações de ML na mesma plataforma usada para gerenciar dados de produção. Por exemplo, em vez de baixar dados de treinamento para um laptop, onde é difícil governar e reproduzir resultados, proteja os dados em armazenamento em nuvem e disponibilize esse armazenamento para seu processo de treinamento.\n\neBook",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-03-01",
        "identifier": "R-03-01",
        "principle": "Projetar para auto-escalabilidade",
        "title": "Habilitar auto-escalabilidade para cargas ETL",
        "capabilities": "Databricks Workflows",
        "details": "O auto-scaling permite que clusters redimensionem automaticamente com base nas cargas de trabalho. O auto-scaling pode beneficiar muitos casos de uso e cenários tanto de uma perspectiva de custo quanto de desempenho. A documentação fornece considerações para determinar se deve usar auto-scaling e como obter o maior benefício.\n\nPara cargas de trabalho de streaming, o Databricks recomenda usar Delta Live Tables com auto-scaling. Veja Use autoscaling to increase efficiency and reduce resource usage.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-03-02",
        "identifier": "R-03-02",
        "principle": "Projetar para auto-escalabilidade",
        "title": "Usar auto-escalabilidade para SQL Warehouses",
        "capabilities": "Databricks SQL",
        "details": "O parâmetro de escala de um SQL warehouse define o número mínimo e máximo de clusters sobre os quais as consultas enviadas ao warehouse são distribuídas. O padrão é um mínimo de um e um máximo de um cluster.\n\nPara lidar com mais usuários simultâneos para um determinado warehouse, aumente a contagem de clusters. Para saber como o Databricks adiciona e remove clusters de um warehouse, veja SQL warehouse sizing, scaling, and queuing behavior.\n\nAWS | Azure | GCP\n\nO enhanced autoscaling do Databricks otimiza a utilização do cluster alocando automaticamente recursos do cluster com base no volume de carga de trabalho, com impacto mínimo na latência de processamento de dados dos seus pipelines.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-04-01",
        "identifier": "R-04-01",
        "principle": "Testar procedimentos de recuperação",
        "title": "Recuperar de falhas de consultas Structured Streaming",
        "capabilities": "Structured Streaming",
        "details": "O Structured Streaming fornece tolerância a falhas e consistência de dados para consultas de streaming. Usando Databricks workflows, você pode facilmente configurar suas consultas Structured Streaming para reiniciar automaticamente em caso de falha. A consulta reiniciada continua de onde a falha parou.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-04-02",
        "identifier": "R-04-02",
        "principle": "Testar procedimentos de recuperação",
        "title": "Recuperar jobs ETL usando capacidades de time travel",
        "capabilities": "Delta Lake - Delta Time Travel",
        "details": "Apesar de testes completos, um job em produção pode falhar ou produzir alguns dados inesperados, até mesmo inválidos. Às vezes isso pode ser corrigido com um job adicional após entender a origem do problema e corrigir o pipeline que levou ao problema em primeiro lugar. No entanto, frequentemente isso não é direto, e o respectivo job deve ser revertido. Usando o Delta Time travel permite que os usuários facilmente revertam mudanças para uma versão ou timestamp anterior, reparem o pipeline e reiniciem o pipeline corrigido. Veja What is Delta Lake time travel?.\n\nUma maneira conveniente de fazer isso é o comando RESTORE.\n\nAWS | Azure | GCP\nBlog",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-04-03",
        "identifier": "R-04-03",
        "principle": "Testar procedimentos de recuperação",
        "title": "Usar framework de automação de jobs com recuperação integrada",
        "capabilities": "Databricks Workflows",
        "details": "Os Databricks Workflows são construídos para recuperação. Quando uma tarefa em um job multi-tarefa falha (e, como tal, todas as tarefas dependentes), os Databricks Workflows fornecem uma visualização em matriz das execuções, que permite examinar o problema que levou à falha. Veja View runs for a job. Seja um breve problema de rede ou um problema real nos dados, você pode corrigi-lo e iniciar uma execução de reparo nos Databricks Workflows. Ele executa apenas as tarefas falhadas e dependentes e mantém os resultados bem-sucedidos da execução anterior, economizando tempo e dinheiro.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-04-04",
        "identifier": "R-04-04",
        "principle": "Testar procedimentos de recuperação",
        "title": "Configurar padrão de recuperação de desastres",
        "capabilities": null,
        "details": "O Databricks é frequentemente uma parte central de um ecossistema de dados geral que inclui muitos serviços, incluindo serviços de ingestão de dados upstream (batch/streaming), armazenamento nativo em nuvem, ferramentas e serviços downstream como aplicativos de business intelligence e ferramentas de orquestração. Alguns dos seus casos de uso podem ser particularmente sensíveis a uma interrupção regional em todo o serviço.\n\nA recuperação de desastres envolve um conjunto de políticas, ferramentas e procedimentos que permitem a recuperação ou continuação de infraestrutura e sistemas de tecnologia vitais após um desastre natural ou induzido pelo homem. Um grande serviço de nuvem como Azure, AWS ou GCP atende muitos clientes e tem proteções integradas contra uma única falha. Por exemplo, uma região é um grupo de edifícios conectados a diferentes fontes de energia para garantir que uma única perda de energia não desligue uma região. No entanto, falhas de região de nuvem podem acontecer, e o grau de interrupção e seu impacto na sua organização pode variar.\n\nPartes essenciais de uma estratégia de recuperação de desastres são selecionar uma estratégia (ativo/ativo ou ativo/passivo), selecionar o conjunto de ferramentas certo e testar tanto o failover quanto a restauração.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-05-01",
        "identifier": "R-05-01",
        "principle": "Monitorar eventos da plataforma",
        "title": "Monitorar eventos da plataforma de dados",
        "capabilities": null,
        "details": "Monitorar eventos da plataforma de dados e ML",
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-05-02",
        "identifier": "R-05-02",
        "principle": "Monitorar eventos da plataforma",
        "title": "Monitorar eventos da nuvem",
        "capabilities": null,
        "details": "Monitorar eventos no seu provedor de nuvem",
        "type": "status",
        "status": "open"
      }
    ]
  },
  {
    "id": "performance-efficiency",
    "name": "Eficiência de Desempenho",
    "description": "Otimizar uso de recursos e adaptar-se às demandas em mudança eficientemente.",
    "questions": [
      {
        "id": "PE-01-01",
        "identifier": "PE-01-01",
        "principle": "Utilizar capacidades serverless",
        "title": "Usar arquitetura serverless",
        "capabilities": "Databricks Serverless Compute",
        "details": "Com a computação serverless na Plataforma de Inteligência de Dados Databricks, a camada de computação roda na conta Databricks do cliente. Administradores de workspace podem criar SQL warehouses serverless que permitem computação instantânea e são gerenciados pelo Databricks. Um SQL warehouse serverless usa clusters de computação hospedados na conta do cliente Databricks. Use-os com consultas Databricks SQL assim como faria normalmente com os SQL warehouses originais do Databricks. A computação serverless vem com um tempo de inicialização muito rápido para SQL warehouses (10s ou menos), e a infraestrutura é gerenciada pelo Databricks.\n\nIsso leva a produtividade melhorada:\n\nAdministradores de nuvem não precisam mais gerenciar ambientes de nuvem complexos, por exemplo ajustando cotas, criando e mantendo ativos de rede, e unindo fontes de faturamento.\n\nUsuários se beneficiam de tempos de espera quase zero para inicialização de cluster e concorrência melhorada em suas consultas.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-01-02",
        "identifier": "PE-01-02",
        "principle": "Utilizar capacidades serverless",
        "title": "Usar serviço de serving de modelos de nível empresarial",
        "capabilities": "Databricks Model Serving",
        "details": "Databricks Model Serving fornece uma interface unificada para implantar, governar e consultar modelos de IA. Cada modelo que você serve está disponível como uma API REST que você pode integrar em sua aplicação web ou cliente.\n\nModel Serving fornece um serviço altamente disponível e de baixa latência para implantar modelos. O serviço escala automaticamente para cima ou para baixo para atender mudanças de demanda, economizando custos de infraestrutura enquanto otimiza desempenho de latência. Esta funcionalidade usa computação serverless.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-01",
        "identifier": "PE-02-01",
        "principle": "Projetar cargas de trabalho para desempenho",
        "title": "Entender seus padrões de ingestão e acesso a dados",
        "capabilities": null,
        "details": "Do ponto de vista de desempenho, padrões de acesso a dados - como \"agregações versus acesso pontual\" ou \"scan versus busca\" - se comportam de forma diferente dependendo do tamanho dos dados. Arquivos grandes são mais eficientes para consultas de scan e arquivos menores são melhores para busca, já que você precisa ler menos dados para encontrar a(s) linha(s) específica(s).\n\nPara padrões de ingestão, é comum usar declarações DML. Declarações DML são mais performáticas quando os dados estão clusterizados, e você pode simplesmente isolar a seção de dados. Manter os dados clusterizados e isoláveis na ingestão é importante: Considere manter uma ordem de ordenação temporal natural e aplique o máximo de filtros possível à tabela alvo de ingestão. Para cargas de trabalho de ingestão somente append e overwrite, não há muito a considerar, pois é uma operação relativamente barata.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-02",
        "identifier": "PE-02-02",
        "principle": "Projetar cargas de trabalho para desempenho",
        "title": "Usar computação paralela onde é benéfico",
        "capabilities": "Apache Spark",
        "details": "Tempo para valor é uma dimensão importante ao trabalhar com dados. Enquanto muitos casos de uso podem ser facilmente implementados em uma única máquina (dados pequenos, poucos e simples passos de computação), frequentemente surgem casos de uso que:\n\nPrecisam processar grandes conjuntos de dados.\n\nTêm tempos de execução longos devido a algoritmos complicados.\n\nDevem ser repetidos centenas e milhares de vezes.\n\nO ambiente de cluster da plataforma Databricks é um ótimo ambiente para distribuir essas cargas de trabalho eficientemente. Ele automaticamente paraleliza consultas SQL através de todos os nós de um cluster e fornece bibliotecas para Python e Scala para fazer o mesmo. Por baixo dos panos, os motores Apache Spark e Photon analisam as consultas, determinam a forma ideal de execução paralela, e gerenciam a execução distribuída de forma resiliente.\n\nAWS | Azure | GCP\nAWS | Azure | GCP\nAWS | Azure | GCP\nMLlib\nAWS | Azure | GCP\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-03",
        "identifier": "PE-02-03",
        "principle": "Projetar cargas de trabalho para desempenho",
        "title": "Analisar toda a cadeia de execução",
        "capabilities": "Workflows; Unity Catalog",
        "details": "A maioria dos pipelines ou padrões de consumo usam uma cadeia de sistemas. Por exemplo, para ferramentas de BI, o desempenho é impactado por vários fatores:\nA ferramenta de BI em si.\nO conector que conecta a ferramenta de BI e o motor SQL.\nO motor SQL para onde a ferramenta de BI envia a consulta.\nPara desempenho de melhor qualidade, toda a cadeia precisa ser levada em consideração e selecionada/ajustada para o melhor desempenho.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-04",
        "identifier": "PE-02-04",
        "principle": "Projetar cargas de trabalho para desempenho",
        "title": "Preferir clusters maiores",
        "capabilities": "Databricks Cluster Configuration",
        "details": "Planeje para clusters maiores, especialmente quando a carga de trabalho escala linearmente. Nesse caso, não é mais caro usar um cluster grande para uma carga de trabalho do que usar um menor. É apenas mais rápido. A chave é que você está alugando o cluster pela duração da carga de trabalho. Então, se você iniciar dois clusters de workers e leva uma hora, você está pagando por esses workers pela hora inteira. Similarmente, se você iniciar um cluster de quatro workers e leva apenas meia hora (aqui entra a escalabilidade linear), os custos são os mesmos. Se custos são o driver principal com um SLA muito flexível, um cluster com auto-scaling quase sempre vai ser o mais barato, mas não necessariamente o mais rápido.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-05",
        "identifier": "PE-02-05",
        "principle": "Projetar cargas de trabalho para desempenho",
        "title": "Usar operações nativas do Spark",
        "capabilities": "Apache Spark",
        "details": "User Defined Functions (UDFs) são uma ótima maneira de estender a funcionalidade do Spark SQL. No entanto, não use UDFs de Python ou Scala se uma função nativa existir:\nSpark SQL\nPySpark\n\nRazões:\nPara transferir dados entre Python e Spark, serialização é necessária. Isso desacelera drasticamente as consultas.\nMaior esforço para implementar e testar funcionalidades já existentes na plataforma.\n\nSe funções nativas estão faltando e devem ser implementadas como UDFs Python, use Pandas UDFs. Apache Arrow garante que os dados se movam eficientemente entre Spark e Python.\n\nAWS | Azure | GCP\nApache Arrow",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-06",
        "identifier": "PE-02-06",
        "principle": "Projetar cargas de trabalho para desempenho",
        "title": "Usar motores nativos da plataforma",
        "capabilities": "Photon",
        "details": "Photon é o motor no Databricks que fornece desempenho de consulta rápido a baixo custo – desde ingestão de dados, ETL, streaming, ciência de dados e consultas interativas – diretamente no seu data lake. Photon é compatível com APIs do Apache Spark, então começar é tão fácil quanto ligar – sem mudanças de código e sem lock-in.\n\nPhoton é parte de um runtime de alto desempenho que executa suas chamadas de API SQL e DataFrame existentes mais rápido e reduz seu custo total por carga de trabalho. Photon é usado por padrão em SQL warehouses do Databricks.\nPhoton está disponível por padrão para todos os tipos de SQL Warehouse do Databricks.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-07",
        "identifier": "PE-02-07",
        "principle": "Projetar cargas de trabalho para desempenho",
        "title": "Entender seu hardware e tipo de carga de trabalho",
        "capabilities": "Databricks Cluster Configuration",
        "details": "Nem todas as VMs de nuvem são criadas igualmente. As diferentes famílias de máquinas oferecidas pelos provedores de nuvem são todas diferentes o suficiente para importar. Há diferenças óbvias - RAM e cores - e diferenças mais sutis - tipo e geração de processador, garantias de largura de banda de rede, e armazenamento local de alta velocidade versus disco local versus disco remoto. Também há diferenças nos mercados \"spot\". Estes devem ser entendidos antes de decidir o melhor tipo de VM para sua carga de trabalho.\n\nAWS | Azure | GCP\n\nPor favor note - Computação serverless gerencia clusters automaticamente, então isso não é necessário para computação serverless.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-08",
        "identifier": "PE-02-08",
        "principle": "Projetar cargas de trabalho para desempenho",
        "title": "Usar cache",
        "capabilities": "Databricks Cluster Configuration",
        "details": "O cache de disco Delta (anteriormente conhecido como \"cache DBIO\") acelera leituras de dados armazenando cópias de arquivos Parquet remotos no armazenamento local (SSD) dos nós. Essa funcionalidade cria automaticamente uma cópia local de dados remotos conforme são obtidos da nuvem e é transparente para o usuário. O cache de disco Delta é particularmente útil para consultas que leem repetidamente um subconjunto particular dos dados. É muito mais rápido ler dados do disco local do que ler dados remotos.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-09",
        "identifier": "PE-02-09",
        "principle": "Projetar cargas de trabalho para desempenho",
        "title": "Usar compactação",
        "capabilities": "Optimize with ZOrder",
        "details": "O Delta Lake no Databricks pode melhorar a velocidade de leitura de consultas de uma tabela. Uma maneira de melhorar essa velocidade é coalescer arquivos pequenos em arquivos maiores. Você aciona a compactação executando o comando OPTIMIZE. Veja Compact data files with optimize on Delta Lake.\n\nVocê também pode compactar arquivos pequenos automaticamente usando Auto Optimize. Veja Consider file size tuning.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-10",
        "identifier": "PE-02-10",
        "principle": "Projetar cargas de trabalho para desempenho",
        "title": "Usar data skipping",
        "capabilities": "Optimize with ZOrder",
        "details": "Data skipping: Para alcançar isso, informações de data skipping são coletadas automaticamente quando você escreve dados em uma tabela Delta (por padrão o Delta Lake no Databricks coleta estatísticas nas primeiras 32 colunas definidas no esquema da sua tabela). O Delta Lake no Databricks aproveita essas informações (valores mínimos e máximos) no momento da consulta para fornecer consultas mais rápidas. Veja Data skipping for Delta Lake.\n\nPara melhores resultados, aplique Z-ordering, uma técnica para colocalizar informações relacionadas no mesmo conjunto de arquivos. Esta co-localidade é automaticamente usada no Databricks pelos algoritmos de data-skipping do Delta Lake. Este comportamento reduz dramaticamente a quantidade de dados que o Delta Lake no Databricks precisa ler.\n\nDynamic file pruning: O dynamic file pruning (DFP) pode melhorar significativamente o desempenho de muitas consultas em tabelas Delta. DFP é especialmente eficiente para tabelas não particionadas ou joins em colunas não particionadas.\n\nO Delta Lake liquid clustering substitui particionamento de tabela e ZORDER para simplificar decisões de layout de dados e otimizar o desempenho de consultas. O liquid clustering fornece flexibilidade para redefinir chaves de clustering sem reescrever dados existentes, permitindo que o layout de dados evolua junto com as necessidades analíticas ao longo do tempo.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-11",
        "identifier": "PE-02-11",
        "principle": "Projetar cargas de trabalho para desempenho",
        "title": "Habilitar Predictive Optimization no seu metastore",
        "capabilities": "Predictive Optimization",
        "details": "A predictive optimization remove a necessidade de gerenciar manualmente operações de manutenção para tabelas Delta no Databricks.\n\nCom a predictive optimization habilitada, o Databricks identifica automaticamente tabelas que se beneficiariam de operações de manutenção e as executa para o usuário. Operações de manutenção são executadas apenas quando necessário, eliminando tanto execuções desnecessárias para operações de manutenção quanto o ônus associado ao rastreamento e solução de problemas de desempenho.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-12",
        "identifier": "PE-02-12",
        "principle": "Projetar cargas de trabalho para desempenho",
        "title": "Evitar over-partitioning",
        "capabilities": "Partitioning",
        "details": "No passado, particionamento era a maneira mais comum de pular dados. No entanto, particionamento é estático e se manifesta como uma hierarquia de sistema de arquivos. Não há maneira fácil de mudar partições se os padrões de acesso mudarem ao longo do tempo. Frequentemente, particionamento leva a over-partitioning - em outras palavras, muitas partições com arquivos muito pequenos, o que resulta em desempenho de consulta ruim. Veja Partitions.\n\nEnquanto isso, uma escolha muito melhor do que particionamento é Z-ordering.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-14",
        "identifier": "PE-02-14",
        "principle": "Projetar cargas de trabalho para desempenho",
        "title": "Considerar ajuste de tamanho de arquivo",
        "capabilities": "Auto Optimize",
        "details": "O termo auto optimize às vezes é usado para descrever funcionalidade controlada pelas configurações delta.autoCompact e delta.optimizeWrite. Este termo foi aposentado em favor de descrever cada configuração individualmente. Veja Configure Delta Lake to control data file size.\n\nAuto Optimize é particularmente útil nos seguintes cenários:\nCasos de uso de streaming onde latência na ordem de minutos é aceitável.\nMERGE INTO é o método preferido de escrever no Delta Lake.\nCREATE TABLE AS SELECT ou INSERT INTO são operações comumente usadas.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-15",
        "identifier": "PE-02-15",
        "principle": "Projetar cargas de trabalho para desempenho",
        "title": "Otimizar desempenho de joins",
        "capabilities": "Databricks Adaptive Query Execution",
        "details": "Um range join ocorre quando duas relações são unidas usando uma condição de ponto em intervalo ou sobreposição de intervalo. O suporte de otimização de range join no Databricks Runtime pode trazer ordens de magnitude de melhoria no desempenho de consultas, mas requer ajuste manual cuidadoso.\n\nAWS | Azure | GCP\n\nData skew é uma condição em que os dados de uma tabela são distribuídos de forma desigual entre as partições no cluster. Data skew pode degradar severamente o desempenho de consultas, especialmente aquelas com joins. Joins entre tabelas grandes requerem shuffling de dados, e o skew pode levar a um desequilíbrio extremo de trabalho no cluster.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-16",
        "identifier": "PE-02-16",
        "principle": "Projetar cargas de trabalho para desempenho",
        "title": "Executar analyze table para coletar estatísticas",
        "capabilities": "Analyze Table",
        "details": "Execute analyze table para coletar estatísticas em toda a tabela para o plano de consulta.\nEssas informações são persistidas no metastore e ajudam o otimizador de consultas:\n\nEscolhendo o tipo de join adequado.\nSelecionando o lado de construção correto em um hash-join.\nCalibrando a ordem de join em um join multi-way.\n\nDeve ser executado junto com OPTIMIZE diariamente e é recomendado em tabelas < 5TB. A única ressalva é que analyze table não é incremental.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-03-01",
        "identifier": "PE-03-01",
        "principle": "Executar testes de desempenho",
        "title": "Testar com dados representativos de produção",
        "capabilities": null,
        "details": "Execute testes de desempenho em dados de produção (somente leitura) ou dados similares. Ao usar dados similares, características como volume, layout de arquivo e data skews devem ser como dados de produção, pois isso tem um impacto significativo no desempenho.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-03-02",
        "identifier": "PE-03-02",
        "principle": "Executar testes de desempenho",
        "title": "Levar em conta prewarming de recursos",
        "capabilities": "Databricks Pools",
        "details": "Levar em conta prewarming de recursos\nA primeira consulta em um novo cluster é mais lenta que todas as outras:\n\nEm geral, recursos do cluster precisam inicializar em múltiplas camadas.\n\nQuando caching faz parte da configuração, a primeira execução garante que os dados estejam no cache, o que acelera jobs subsequentes.\n\nPrewarming de recursos - executar consultas específicas para inicializar recursos e preencher caches (por exemplo, após um reinício de cluster) - pode aumentar significativamente o desempenho das primeiras consultas. Então, para entender o comportamento para os diferentes cenários, teste o desempenho da primeira execução (com e sem prewarming) e execuções subsequentes.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-03-03",
        "identifier": "PE-03-03",
        "principle": "Executar testes de desempenho",
        "title": "Identificar gargalos",
        "capabilities": null,
        "details": "Gargalos são áreas na sua carga de trabalho que podem piorar o desempenho geral quando a carga em produção aumenta. Identificar estes no momento do design e testar contra cargas maiores ajudará a manter as cargas de trabalho estáveis em produção.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-04-01",
        "identifier": "PE-04-01",
        "principle": "Monitorar desempenho",
        "title": "Monitorar desempenho de consultas",
        "capabilities": null,
        "details": "Query Profile: Utilize o recurso de query profile para solucionar gargalos de desempenho durante a execução de uma consulta. Ele fornece visualização de cada tarefa de consulta e métricas relacionadas como tempo gasto, número de linhas processadas e consumo de memória.\n\nSQL Warehouse Monitoring: Monitore SQL warehouses visualizando estatísticas ao vivo, gráficos de contagem de pico de consultas, gráficos de clusters em execução e tabela de histórico de consultas.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-04-02",
        "identifier": "PE-04-02",
        "principle": "Monitorar desempenho",
        "title": "Monitorar cargas de trabalho de streaming",
        "capabilities": null,
        "details": "Structured Streaming Monitoring: Para consultas de streaming, use o monitoramento integrado na Spark UI sob a aba Streaming ou envie métricas para serviços externos usando a interface Streaming Query Listener do Apache Spark.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-04-03",
        "identifier": "PE-04-03",
        "principle": "Monitorar desempenho",
        "title": "Monitorar desempenho de jobs",
        "capabilities": null,
        "details": "Visualize e gerencie execuções de jobs através da UI do Databricks, que fornece detalhes sobre saída do job, logs, métricas e o sucesso ou falha de cada tarefa na execução do job.",
        "type": "status",
        "status": "open"
      }
    ]
  },
  {
    "id": "cost-optimization",
    "name": "Otimização de Custos",
    "description": "Maximizar valor enquanto minimiza custos através de gerenciamento eficiente de recursos.",
    "questions": [
      {
        "id": "CO-01-01",
        "identifier": "CO-01-01",
        "principle": "Escolher recursos ótimos",
        "title": "Usar formatos de dados otimizados para desempenho",
        "capabilities": "Delta Lake",
        "details": "Delta Lake é uma camada de armazenamento open-source que aprimora data lakes fornecendo transações ACID, manipulação escalável de metadados e aplicação de esquema, construída principalmente sobre Apache Spark e Parquet. Suporta uma arquitetura lakehouse, permitindo integração com vários motores de computação e linguagens de programação. Delta Lake oferece otimizações significativas de desempenho como data skipping, indexação e técnicas de gerenciamento de arquivos como compactação e Z-Ordering. Adicionalmente, inclui recursos como time travel para versionamento de dados e Delta Live Tables para gerenciar pipelines de dados batch e streaming eficientemente. Essas capacidades tornam Delta Lake adequado para lidar com cargas de trabalho transacionais em grande escala e análises em tempo real, garantindo integridade e consistência de dados em diversos cenários de gerenciamento de dados.\nBlog",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-02",
        "identifier": "CO-01-02",
        "principle": "Escolher recursos ótimos",
        "title": "Usar job clusters",
        "capabilities": "Databricks Workflows",
        "details": "Um job é uma forma de executar código não-interativo em um cluster Databricks. Por exemplo, você pode executar uma carga de trabalho de extração, transformação e carregamento (ETL) interativamente ou em uma agenda. Claro, você também pode executar jobs interativamente na interface do notebook. No entanto, em job clusters, as cargas de trabalho não-interativas custam significativamente menos do que em clusters de propósito geral.\nUma vantagem adicional é que cada job ou workflow executa em um novo cluster, isolando cargas de trabalho umas das outras.\n\nAWS | Azure | GCP\nPricing",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-03",
        "identifier": "CO-01-03",
        "principle": "Escolher recursos ótimos",
        "title": "Usar SQL warehouse para cargas de trabalho SQL",
        "capabilities": "Databricks Serverless SQL",
        "details": "Para cargas de trabalho SQL interativas, um Databricks SQL warehouse é o motor mais eficiente em termos de custo.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-04",
        "identifier": "CO-01-04",
        "principle": "Escolher recursos ótimos",
        "title": "Usar runtimes atualizados para suas cargas de trabalho",
        "capabilities": "Databricks Cluster Configuration",
        "details": "A plataforma Databricks fornece diferentes runtimes que são otimizados para tarefas de engenharia de dados (Databricks Runtime) ou para Machine Learning (Databricks Runtime for Machine Learning). Os runtimes são construídos para fornecer a melhor seleção de bibliotecas para as tarefas e garantir que todas as bibliotecas fornecidas estejam atualizadas e funcionem juntas de forma ótima. O Databricks Runtime é lançado em uma cadência regular e oferece melhorias de desempenho entre releases principais. Essas melhorias em desempenho frequentemente levam a economia de custos devido ao uso mais eficiente de recursos de cluster.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-05",
        "identifier": "CO-01-05",
        "principle": "Escolher recursos ótimos",
        "title": "Usar GPUs apenas para as cargas de trabalho certas",
        "capabilities": "Databricks Cluster Configuration",
        "details": "Máquinas virtuais com GPUs podem acelerar dramaticamente processos computacionais para deep learning, mas têm um preço significativamente mais alto do que máquinas apenas com CPU. Use instâncias GPU apenas para cargas de trabalho que têm bibliotecas aceleradas por GPU.\nA maioria das cargas de trabalho não usa bibliotecas aceleradas por GPU e não se beneficia de instâncias habilitadas para GPU. Administradores de workspace podem restringir máquinas e clusters GPU para evitar uso desnecessário.\n\nAWS | Azure | GCP\nBlog",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-06",
        "identifier": "CO-01-06",
        "principle": "Escolher recursos ótimos",
        "title": "Usar Serverless para suas cargas de trabalho",
        "capabilities": "Databricks Serverless",
        "details": "Cargas de trabalho de BI tipicamente usam dados em rajadas e geram múltiplas consultas simultâneas. Por exemplo, alguém usando uma ferramenta de BI pode atualizar um dashboard, escrever uma consulta ou simplesmente analisar resultados de consultas sem interagir mais com a plataforma. Este exemplo demonstra dois requisitos:\n\nTerminar clusters durante períodos ociosos para economizar custos.\nTer recursos de computação disponíveis rapidamente (tanto para inicialização quanto para scale-up) para satisfazer consultas de usuários quando solicitam dados novos ou atualizados com a ferramenta de BI.\n\nSQL warehouses serverless iniciam e escalam em segundos, então tanto disponibilidade imediata quanto terminação durante tempos ociosos podem ser alcançadas. Isso resulta em uma ótima experiência do usuário e economia geral de custos.\nAdicionalmente, SQL warehouses serverless reduzem mais cedo do que warehouses não-serverless, resultando em custos menores.\n\nAWS | Azure | GCP\n\nO Databricks Model Serving fornece uma interface unificada para implantar, governar e consultar modelos de IA. Cada modelo que você serve está disponível como uma API REST que você pode integrar em seu aplicativo web ou cliente.\n\nO Model Serving fornece um serviço de alta disponibilidade e baixa latência para implantação de modelos. O serviço escala automaticamente para atender mudanças na demanda, economizando custos de infraestrutura enquanto otimiza o desempenho de latência. Esta funcionalidade usa computação serverless.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-07",
        "identifier": "CO-01-07",
        "principle": "Escolher recursos ótimos",
        "title": "Usar o tipo de instância certo",
        "capabilities": "Databricks Cluster Configuration",
        "details": "Com base nas suas cargas de trabalho, também é importante escolher a família de instâncias certa para obter a melhor relação desempenho/preço. Algumas regras simples são:\nOtimizado para memória para ML, cargas de trabalho com heavy shuffle & spill\nOtimizado para computação para cargas de trabalho de Structured Streaming, jobs de manutenção (ex. Optimize & Vacuum)\nOtimizado para armazenamento para cargas de trabalho que se beneficiam de caching, ex. análise de dados ad-hoc & interativa\nOtimizado para GPU para cargas de trabalho específicas de ML & DL\nPropósito geral na ausência de requisitos específicos",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-08",
        "identifier": "CO-01-08",
        "principle": "Escolher recursos ótimos",
        "title": "Escolher o tamanho de cluster mais eficiente",
        "capabilities": "Databricks Cluster Configuration",
        "details": "Número de workers, tipo de instância e tamanho são fatores importantes para configurações de computação. Junto com esses, ao dimensionar computação, considere os dados consumidos, complexidade computacional, particionamento de dados e paralelismo necessário. Para cargas de trabalho ETL simples, foque em configurações otimizadas para computação, enquanto memória e armazenamento são importantes para cargas de trabalho com heavy shuffle. Balancear o número de workers e o tamanho da instância é crucial, pois ambos podem afetar I/O de rede. Por fim, considere os benefícios de caching para cargas de trabalho que requerem releituras frequentes dos mesmos dados, usando configurações otimizadas para armazenamento com Delta Cache.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-09",
        "identifier": "CO-01-09",
        "principle": "Escolher recursos ótimos",
        "title": "Avaliar engines de consulta otimizados para desempenho",
        "capabilities": "Databricks Cluster Configuration",
        "details": "Photon é um engine de consulta vetorizado nativo do Databricks de alto desempenho que acelera suas cargas de trabalho SQL e chamadas de API DataFrame (para ingestão de dados, ETL, streaming, ciência de dados e consultas interativas). Photon é compatível com APIs do Apache Spark, então começar é tão fácil quanto ligá-lo – sem mudanças de código e sem lock-in.\nA aceleração observada pode levar a economia de custos significativa, e jobs que rodam regularmente devem ser avaliados para ver se não são apenas mais rápidos, mas também mais baratos com Photon.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-02-01",
        "identifier": "CO-02-01",
        "principle": "Alocar recursos dinamicamente",
        "title": "Aproveitar computação com auto-scaling",
        "capabilities": "Databricks Cluster Configuration",
        "details": "Auto-scaling permite que suas cargas de trabalho usem a quantidade certa de computação necessária para completar seus jobs.\n\nHabilite auto-scaling para cargas de trabalho batch.\nHabilite auto-scaling para SQL warehouse.\nAWS | Azure | GCP\n\nAuto-scaling de computação tem limitações ao reduzir o tamanho do cluster para cargas de trabalho de Structured Streaming. O Databricks recomenda usar Delta Live Tables com Enhanced Autoscaling para cargas de trabalho de streaming.\nUse Delta Live Tables Enhanced Autoscaling.\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-02-02",
        "identifier": "CO-02-02",
        "principle": "Alocar recursos dinamicamente",
        "title": "Usar terminação automática",
        "capabilities": "Databricks Cluster Configuration",
        "details": "O Databricks fornece vários recursos para ajudar a controlar custos reduzindo recursos ociosos e controlando quando recursos de computação podem ser implantados.\nConfigure terminação automática para todos os clusters interativos. Após um tempo ocioso especificado, o cluster é desligado. Veja Automatic termination.\n\nSe um tempo de inicialização significativamente menor que uma inicialização completa de cluster seria aceitável, considere usar pools de cluster. Veja Pool best practices. Pools do Databricks reduzem tempos de inicialização e auto-scaling de cluster mantendo um conjunto de instâncias ociosas e prontas para uso. Quando um cluster é anexado a um pool, os nós do cluster são criados usando as instâncias ociosas do pool. Se o pool não tem instâncias ociosas, o pool expande alocando uma nova instância do provedor de instância para acomodar a solicitação do cluster. Quando um cluster libera uma instância, ela retorna ao pool e fica livre para outro cluster usar.\nO Databricks não cobra DBUs enquanto instâncias estão ociosas no pool, resultando em economia de custos. A cobrança do provedor de instância se aplica.\n\nAWS | Azure | GCP\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-02-03",
        "identifier": "CO-02-03",
        "principle": "Alocar recursos dinamicamente",
        "title": "Usar políticas de computação para controlar custos",
        "capabilities": "Databricks Cluster Policies",
        "details": "Políticas de cluster podem aplicar muitas restrições específicas de custo para clusters. Veja Operational Excellence - Use cluster policies. Por exemplo:\n\nHabilite auto-scaling de cluster com um número mínimo definido de nós worker.\nHabilite terminação automática de cluster com um valor razoável (por exemplo, 1 hora) para evitar pagar por tempos ociosos.\nGaranta que apenas instâncias de VM eficientes em custo podem ser selecionadas. Siga as melhores práticas para configuração de cluster. Veja Compute configuration best practices.\nAplique uma estratégia de instância spot.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-03-01",
        "identifier": "CO-03-01",
        "principle": "Monitorar e controlar custos",
        "title": "Monitorar custos",
        "capabilities": "Unity Catalog",
        "details": "O console da conta permite visualizar o uso faturável. Como proprietário ou administrador de conta Databricks, você também pode usar o console da conta para baixar logs de uso faturável. Tabelas de sistema do Databricks fornecem detalhes de uso detalhados com tabelas de sistema que você pode usar para monitorar uso.\n\nComo melhor prática, os custos completos (incluindo VMs, armazenamento e infraestrutura de rede) devem ser monitorados. Isso pode ser alcançado por ferramentas de gerenciamento de custos do provedor de nuvem ou adicionando ferramentas de terceiros.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-03-02",
        "identifier": "CO-03-02",
        "principle": "Monitorar e controlar custos",
        "title": "Etiquetar clusters para atribuição de custos",
        "capabilities": "Databricks Cluster Configuration",
        "details": "Para monitorar custos e atribuir com precisão o uso do Databricks às unidades de negócios e equipes da sua organização (por exemplo, para chargebacks), você pode etiquetar clusters e pools. Essas tags se propagam para relatórios detalhados de uso de DBU e para VMs e instâncias de blob storage do provedor de nuvem para análise de custos.\n\nGaranta que controle de custos e atribuição já estejam em mente ao configurar workspaces e clusters para equipes e casos de uso. Isso simplifica a etiquetagem e melhora a precisão das atribuições de custo.\n\nPara os custos gerais, DBU, máquina virtual, disco e quaisquer custos de rede associados devem ser considerados. Para SQL warehouses serverless isso é mais simples já que os custos de DBU já incluem custos de máquina virtual e disco.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-03-03",
        "identifier": "CO-03-03",
        "principle": "Monitorar e controlar custos",
        "title": "Implementar observabilidade para rastrear e cobrar custos",
        "capabilities": "Databricks Cluster Configuration",
        "details": "Ao trabalhar com ecossistemas técnicos complexos, entender proativamente as incógnitas é chave para manter a estabilidade da plataforma e controlar custos. Observabilidade fornece uma maneira de analisar e otimizar sistemas com base nos dados que eles geram. Isso é diferente de monitoramento, que foca em identificar novos padrões em vez de rastrear problemas conhecidos.\nO Databricks fornece ótimas capacidades de observabilidade usando System tables que são armazenamentos analíticos hospedados pelo Databricks dos dados operacionais de uma conta de cliente encontrados no catálogo de sistema. Eles fornecem observabilidade histórica em toda a conta e incluem informações tabulares amigáveis sobre telemetria da plataforma.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-03-04",
        "identifier": "CO-03-04",
        "principle": "Monitorar e controlar custos",
        "title": "Compartilhar relatórios de custos regularmente",
        "capabilities": "Unity Catalog - System Tables",
        "details": "Crie relatórios de custos todo mês para rastrear crescimento e anomalias no consumo. Compartilhe esses relatórios detalhados por casos de uso ou equipes com as equipes que possuem as respectivas cargas de trabalho usando tagging de cluster. Isso evita surpresas e permite que equipes adaptem proativamente suas cargas de trabalho se os custos ficarem muito altos.\n\nUse o console da conta para obter uso de alto nível - AWS | Azure | GCP\n\nO Databricks recomenda usar tabelas de sistema do Unity Catalog para gerar relatórios de uso detalhados (por tags de uso, etc) para relatórios de custos aprimorados.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-03-05",
        "identifier": "CO-03-05",
        "principle": "Monitorar e controlar custos",
        "title": "Monitorar e gerenciar custos de egress do Delta Sharing",
        "capabilities": "System Tables",
        "details": "Ao contrário de outras plataformas de compartilhamento de dados, o Delta Sharing não requer replicação de dados. Este modelo tem muitas vantagens, mas significa que seu fornecedor de nuvem pode cobrar taxas de egress de dados quando você compartilha dados entre nuvens ou regiões. Veja Monitor and manage Delta Sharing egress costs (for providers) para monitorar e gerenciar cobranças de egress.",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-04-01",
        "identifier": "CO-04-01",
        "principle": "Projetar cargas de trabalho eficientes em custo",
        "title": "Equilibrar streaming always-on e disparado por gatilho",
        "capabilities": "Databricks Streaming",
        "details": "Tradicionalmente, quando as pessoas pensam em streaming, termos como \"tempo real\", \"24/7\" ou \"always on\" vêm à mente. Se a ingestão de dados acontece em \"tempo real\", o cluster subjacente precisa rodar 24/7, produzindo custos de consumo a cada hora do dia.\n\nNo entanto, nem todo caso de uso baseado em um fluxo contínuo de eventos precisa que esses eventos sejam adicionados ao conjunto de dados analíticos imediatamente. Se o requisito de negócio para o caso de uso só precisa de dados frescos a cada poucas horas ou todo dia, então esse requisito pode ser alcançado com apenas algumas execuções por dia, levando a uma redução significativa de custos para a carga de trabalho. O Databricks recomenda usar Structured Streaming com trigger AvailableNow para cargas de trabalho incrementais que não têm requisitos de baixa latência. Veja Configuring incremental batch processing.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-04-02",
        "identifier": "CO-04-02",
        "principle": "Projetar cargas de trabalho eficientes em custo",
        "title": "Equilibrar entre instâncias on-demand e de capacidade excedente",
        "capabilities": "Databricks Cluster Configuration",
        "details": "Instâncias spot usam recursos excedentes de máquinas virtuais de nuvem que estão disponíveis a um preço mais barato. Para economizar custos, o Databricks suporta criar clusters usando instâncias spot. É recomendado sempre ter a primeira instância (driver Spark) como uma máquina virtual on-demand. Instâncias spot são uma ótima seleção para cargas de trabalho quando é aceitável demorar mais porque uma ou mais instâncias spot foram despejadas pelo provedor de nuvem.\n\nAWS | Azure | GCP",
        "type": "status",
        "status": "open"
      }
    ]
  }
];
