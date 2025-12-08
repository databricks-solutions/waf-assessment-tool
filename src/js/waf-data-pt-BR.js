/**
 * WAF Assessment Questions - Portuguese (Brazil) Translation
 * Todas as perguntas e detalhes traduzidos para Português do Brasil
 */

const WAF_PILLARS_DATA = [
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
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-01-02",
        "identifier": "IU-01-02",
        "principle": "Definir padrões para integração",
        "title": "Usar conectores otimizados para ingerir fontes de dados no lakehouse",
        "capabilities": "Lakehouse Federation",
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-01-03",
        "identifier": "IU-01-03",
        "principle": "Definir padrões para integração",
        "title": "Usar ferramentas de parceiros certificados",
        "capabilities": "Databricks Partner Connect",
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-01-04",
        "identifier": "IU-01-04",
        "principle": "Definir padrões para integração",
        "title": "Reduzir complexidade de pipelines de engenharia de dados",
        "capabilities": "Delta Live Tables; Autoloader",
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-02-01",
        "identifier": "IU-02-01",
        "principle": "Utilizar interfaces e formatos de dados abertos",
        "title": "Usar formatos de dados abertos",
        "capabilities": "Delta Lake",
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-02-02",
        "identifier": "IU-02-02",
        "principle": "Utilizar interfaces e formatos de dados abertos",
        "title": "Habilitar compartilhamento seguro de dados para todos os ativos",
        "capabilities": "Delta Sharing",
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-02-03",
        "identifier": "IU-02-03",
        "principle": "Utilizar interfaces e formatos de dados abertos",
        "title": "Usar padrões abertos para fluxos de trabalho de IA",
        "capabilities": "MLFlow",
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-03-01",
        "identifier": "IU-03-01",
        "principle": "Simplificar implementação de novos casos de uso",
        "title": "Fornecer experiência de autoatendimento em toda a plataforma",
        "capabilities": "Databricks Data Intelligence Platform",
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-03-02",
        "identifier": "IU-03-02",
        "principle": "Simplificar implementação de novos casos de uso",
        "title": "Usar serviços serverless",
        "capabilities": "Databricks Serverless SQL;\nServerless Workflows;\nServerless Notebooks",
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-03-03",
        "identifier": "IU-03-03",
        "principle": "Simplificar implementação de novos casos de uso",
        "title": "Usar modelos de computação predefinidos",
        "capabilities": "Databricks Cluster Policies",
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-03-04",
        "identifier": "IU-03-04",
        "principle": "Simplificar implementação de novos casos de uso",
        "title": "Usar capacidades de IA para aumentar produtividade",
        "capabilities": "Databricks Assistant",
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-04-01",
        "identifier": "IU-04-01",
        "principle": "Garantir consistência e usabilidade dos dados",
        "title": "Oferecer dados como produtos reutilizáveis confiáveis",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-04-02",
        "identifier": "IU-04-02",
        "principle": "Garantir consistência e usabilidade dos dados",
        "title": "Publicar produtos de dados semanticamente consistentes",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "IU-04-03",
        "identifier": "IU-04-03",
        "principle": "Garantir consistência e usabilidade dos dados",
        "title": "Fornecer catálogo central para descoberta e linhagem",
        "capabilities": "Unity Catalog",
        "details": null,
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
        "title": "Usar Unity Catalog para gestão do ciclo de vida de modelos",
        "capabilities": "Unity Catalog",
        "details": null,
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
        "principle": "Implementar modelo de segurança em camadas",
        "title": "Implementar segurança de defesa em profundidade",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-02",
        "identifier": "SCP-01-02",
        "principle": "Implementar modelo de segurança em camadas",
        "title": "Usar autenticação multifator",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-03",
        "identifier": "SCP-01-03",
        "principle": "Implementar modelo de segurança em camadas",
        "title": "Implementar controle de acesso baseado em funções",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-04",
        "identifier": "SCP-01-04",
        "principle": "Implementar modelo de segurança em camadas",
        "title": "Usar criptografia de dados em repouso e em trânsito",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-05",
        "identifier": "SCP-01-05",
        "principle": "Implementar modelo de segurança em camadas",
        "title": "Implementar segmentação de rede",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-06",
        "identifier": "SCP-01-06",
        "principle": "Implementar modelo de segurança em camadas",
        "title": "Usar gerenciamento de segredos",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-07",
        "identifier": "SCP-01-07",
        "principle": "Implementar modelo de segurança em camadas",
        "title": "Implementar políticas de segurança de dados",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-08",
        "identifier": "SCP-01-08",
        "principle": "Implementar modelo de segurança em camadas",
        "title": "Habilitar registro de auditoria",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-09",
        "identifier": "SCP-01-09",
        "principle": "Implementar modelo de segurança em camadas",
        "title": "Realizar avaliações de segurança regulares",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-10",
        "identifier": "SCP-01-10",
        "principle": "Implementar modelo de segurança em camadas",
        "title": "Implementar proteção DDoS",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-11",
        "identifier": "SCP-01-11",
        "principle": "Implementar modelo de segurança em camadas",
        "title": "Usar login único (SSO)",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-12",
        "identifier": "SCP-01-12",
        "principle": "Implementar modelo de segurança em camadas",
        "title": "Implementar gerenciamento de acesso privilegiado",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "SCP-01-13",
        "identifier": "SCP-01-13",
        "principle": "Implementar modelo de segurança em camadas",
        "title": "Usar tokens de acesso seguros",
        "capabilities": null,
        "details": null,
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
        "title": "Implementar redundância",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-01-02",
        "identifier": "R-01-02",
        "principle": "Projetar para tolerância a falhas",
        "title": "Usar armazenamento de dados resiliente",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-01-03",
        "identifier": "R-01-03",
        "principle": "Projetar para tolerância a falhas",
        "title": "Implementar checkpoints e tentativas",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-01-04",
        "identifier": "R-01-04",
        "principle": "Projetar para tolerância a falhas",
        "title": "Projetar jobs idempotentes",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-01-05",
        "identifier": "R-01-05",
        "principle": "Projetar para tolerância a falhas",
        "title": "Implementar circuit breakers para serviços ML",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "R-01-06",
        "identifier": "R-01-06",
        "principle": "Projetar para tolerância a falhas",
        "title": "Usar tratamento de erros apropriado",
        "capabilities": null,
        "details": null,
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
        "principle": "Selecionar recursos apropriados",
        "title": "Escolher tipos de computação apropriados",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-01-02",
        "identifier": "PE-01-02",
        "principle": "Selecionar recursos apropriados",
        "title": "Usar GPU para cargas de trabalho de ML",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-01",
        "identifier": "PE-02-01",
        "principle": "Otimizar processamento de dados",
        "title": "Usar formato de dados eficiente",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-02",
        "identifier": "PE-02-02",
        "principle": "Otimizar processamento de dados",
        "title": "Implementar particionamento de dados",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-03",
        "identifier": "PE-02-03",
        "principle": "Otimizar processamento de dados",
        "title": "Usar compactação de arquivos pequenos",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-04",
        "identifier": "PE-02-04",
        "principle": "Otimizar processamento de dados",
        "title": "Implementar cache de dados",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-05",
        "identifier": "PE-02-05",
        "principle": "Otimizar processamento de dados",
        "title": "Usar processamento incremental",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-06",
        "identifier": "PE-02-06",
        "principle": "Otimizar processamento de dados",
        "title": "Otimizar consultas SQL",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-07",
        "identifier": "PE-02-07",
        "principle": "Otimizar processamento de dados",
        "title": "Usar Photon para aceleração de consultas",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "PE-02-08",
        "identifier": "PE-02-08",
        "principle": "Otimizar processamento de dados",
        "title": "Implementar visualizações materializadas",
        "capabilities": null,
        "details": null,
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
        "principle": "Implementar governança de custos",
        "title": "Estabelecer orçamentos e alertas",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-02",
        "identifier": "CO-01-02",
        "principle": "Implementar governança de custos",
        "title": "Implementar etiquetagem de recursos",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-03",
        "identifier": "CO-01-03",
        "principle": "Implementar governança de custos",
        "title": "Usar relatórios de custos",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-04",
        "identifier": "CO-01-04",
        "principle": "Implementar governança de custos",
        "title": "Estabelecer políticas de retenção de dados",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-01-05",
        "identifier": "CO-01-05",
        "principle": "Implementar governança de custos",
        "title": "Revisar e otimizar custos regularmente",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-02-01",
        "identifier": "CO-02-01",
        "principle": "Otimizar uso de computação",
        "title": "Usar auto-escalabilidade",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-02-02",
        "identifier": "CO-02-02",
        "principle": "Otimizar uso de computação",
        "title": "Usar instâncias spot/preemptivas",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-02-03",
        "identifier": "CO-02-03",
        "principle": "Otimizar uso de computação",
        "title": "Implementar terminação automática de clusters",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-03-01",
        "identifier": "CO-03-01",
        "principle": "Otimizar custos de armazenamento",
        "title": "Usar camadas de armazenamento apropriadas",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-03-02",
        "identifier": "CO-03-02",
        "principle": "Otimizar custos de armazenamento",
        "title": "Implementar gerenciamento do ciclo de vida de dados",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-03-03",
        "identifier": "CO-03-03",
        "principle": "Otimizar custos de armazenamento",
        "title": "Usar compressão de dados",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-04-01",
        "identifier": "CO-04-01",
        "principle": "Otimizar transferência de dados",
        "title": "Minimizar transferência de dados entre regiões",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      },
      {
        "id": "CO-04-02",
        "identifier": "CO-04-02",
        "principle": "Otimizar transferência de dados",
        "title": "Usar processamento de dados localizado",
        "capabilities": null,
        "details": null,
        "type": "status",
        "status": "open"
      }
    ]
  }
];
