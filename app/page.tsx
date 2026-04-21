'use client'
import { useEffect } from 'react'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { COLORS, WHATSAPP_URL, CALCULATOR_URLS } from '@/lib/constants'

export default function Home() {
  useEffect(() => {
    const nav = document.getElementById('nav');
    if (nav) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      });
    }
  }, []);
  return (
    <main>
      {/* 1. NAV */}
      <nav className="nav" id="nav">
        <div className="container nav-inner">
          <Link href="/" className="nav-logo">
            <Image src="/logo.png" alt="Castelo Forte" width={180} height={38} style={{height:'auto'}} />
          </Link>
          <div className="nav-links">
            <a href="#hero">Início</a>
            <a href="#metodo">Método</a>
            <a href="#servicos">Serviços</a>
            <a href="#planos">Planos</a>
            <a href="#historia">Nossa História</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Agendar diagnóstico</a>
          </div>
        </div>
      </nav>

      {/* 2. HERO */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <Image src="/familia-castelo.jpg" alt="Família a caminho do castelo" fill priority style={{objectFit:'cover',opacity:0.35}} />
        </div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-tag">Finanças Alinhadas ao Seu Propósito</p>
            <h1>O lugar seguro para construir seu <span>Legado</span>.</h1>
            <p className="hero-subtitle">
              Você ganha bem, mas o dinheiro vai embora. O banco lucra com sua desorganização. O guru vende milagres. <span style={{color:'var(--gold)',fontWeight:700,fontStyle:'italic'}}>Nós alinhamos suas finanças ao seu legado.</span>
            </p>
            <div className="hero-btns">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Agendar diagnóstico gratuito</a>
              <a href="#metodo" className="btn btn-outline">Conheça o método</a>
            </div>
            <p style={{color: "#7A8A9A", fontSize: "13px", fontStyle: "italic", textAlign: "center", marginBottom: "12px", fontWeight: 500, letterSpacing: "0.5px"}}>Nossa Expertise</p>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>15+ Anos</strong>
                de mercado
              </div>
              <div className="hero-stat">
                <strong>R$ 2 bi+</strong>
                Administrados
              </div>
              <div className="hero-stat">
                <strong>5 Maiores</strong>
                bancos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: Você se reconhece? */}
      <section className="section section-alt" id="reconhece" style={{background: '#001A38'}}>
        <div className="container">
          <p className="section-tag">O Diagnóstico</p>
          <h2 className="section-title">Você se reconhece?</h2>
          
          
          <div className="reconhece-grid">
            <div className="reconhece-card">
              <span className="reconhece-icon">□</span>
              <p>Ganha bem, mas no fim do mês não sabe para onde o dinheiro foi</p>
            </div>
            <div className="reconhece-card">
              <span className="reconhece-icon">□</span>
              <p>Tem patrimônio, mas a ansiedade sobre o futuro não diminui</p>
            </div>
            <div className="reconhece-card">
              <span className="reconhece-icon">□</span>
              <p>Já tentou planilhas, apps e outras soluções — nada muda de verdade</p>
            </div>
            <div className="reconhece-card">
              <span className="reconhece-icon">□</span>
              <p>Briga em casa por causa de dinheiro, mesmo com renda boa</p>
            </div>
            <div className="reconhece-card">
              <span className="reconhece-icon">□</span>
              <p>Compra por impulso coisas que quase não usa</p>
            </div>
            <div className="reconhece-card">
              <span className="reconhece-icon">□</span>
              <p>Não sabe se vai conseguir manter o padrão na aposentadoria</p>
            </div>
          </div>
          
          <p className="reconhece-final">Se você marcou 3 ou mais, seu problema não é técnico — é comportamental. E é exatamente isso que tratamos.</p>
          
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Quero entender meu perfil →</a>
        </div>
      </section>

      {/* 3. CUSTO DO AMANHÃ */}
      <section className="section section-alt" id="custo">
        <div className="container">
          <p className="section-tag">O Custo do Amanhã</p>
          <h2 className="section-title">R$ 420.000 perdidos em 10 anos</h2>
          <p className="section-subtitle">A procrastinação é o imposto mais caro que você paga...</p>
          
          <div className="custo-grid">
            <div className="custo-card">
              <div className="custo-value">R$ 115</div>
              <p className="custo-label">perdidos por dia</p>
            </div>
            <div className="custo-card">
              <div className="custo-value">R$ 36 mil</div>
              <p className="custo-label">perdidos por ano</p>
            </div>
            <div className="custo-card">
              <div className="custo-value">R$ 210 mil</div>
              <p className="custo-label">em 5 anos</p>
            </div>
            <div className="custo-card red">
              <div className="custo-value">R$ 420 mil</div>
              <p className="custo-label">em 10 anos</p>
            </div>
          </div>
          <p style={{color: "#E57373", fontStyle: "italic", fontSize: "15px", textAlign: "center", margin: "24px 0"}}>Cada dia que passa, R$ 115 se vão do seu patrimônio. Quantos dias mais você vai esperar?</p>
          <div className="custo-img">
            <div className="antes-depois-mini">
              <div className="mini-card">
                <Image src="/same-family-before.png" alt="Família preocupada" width={280} height={200} style={{borderRadius:'6px',objectFit:'cover'}} />
                <span className="mini-label antes">ANTES</span>
                <p>Preocupação constante</p>
              </div>
              <div className="mini-card">
                <Image src="/same-family-after.jpg" alt="Família libre" width={280} height={200} style={{borderRadius:'6px',objectFit:'cover'}} />
                <span className="mini-label depois">DEPOIS</span>
                <p>Liberdade e propósito</p>
              </div>
            </div>
            <p className="custo-legenda">Para uma família com renda de R$ 20.000/mês, o custo da inação é de R$ 36.000 por ano.</p>
          </div>
          
          <div className="alert-box">
            <p><strong>O Ladrão Silencioso:</strong> O IPCA oficial marca 5%, mas plano de saúde e escola sobem 11%+. Sua inflação pessoal destrói seu legado silenciosamente.</p>
          </div>
          
          <div style={{textAlign: 'center', marginTop: '24px'}}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Calcule quanto você está perdendo →</a>
          </div>
        </div>
      </section>

      {/* 4. MÉTODO VIPE - NOVA VERSÃO */}
      <section className="section" id="metodo">
        <div className="container">
          <p className="section-tag">O Método</p>
          <h2 className="section-title">Por que profissionais brilhantes tomam decisões financeiras tão ruins?</h2>
          <p className="section-subtitle">Te ensinam a investir. Não te ensinam por que você sabota o que investiu.</p>
          
          {/* BLOCO 1: A DOR */}
          <div className="metodo-dor-grid">
            <div className="dor-card dor-card-mercado">
              <h3 className="dor-card-title">O que o mercado faz</h3>
              <ul>
                <li>Foca nos 20% — produtos, taxas e rentabilidade.</li>
                <li>Trata o sintoma. Ignora a causa.</li>
              </ul>
            </div>
            <div className="dor-card dor-card-castelo">
              <h3 className="dor-card-title">O que a Castelo Forte faz</h3>
              <ul>
                <li>Trata os 80% — comportamento, crenças e decisões.</li>
                <li>E depois alinha os 20% ao seu perfil real.</li>
              </ul>
            </div>
          </div>
          <p className="metodo-authority">Kahneman, Nobel de Economia: sucesso financeiro é 80% comportamento e 20% técnica.</p>
          
          {/* BLOCO 2: VIP vs VIPE */}
          <div className="vip-vipe-grid">
            <div className="vip-card">
              <h3 className="vip-card-title">O Mundo Busca VIP</h3>
              <ul>
                <li>Status que custa a paz interior.</li>
                <li>Carro financiado para parecer rico.</li>
                <li>Férias no cartão para postar no Instagram.</li>
                <li>Patrimônio de fachada, ansiedade real.</li>
              </ul>
            </div>
            <div className="vipe-card">
              <h3 className="vipe-card-title">VIPE</h3>
              <p className="vipe-card-subtitle">Valores Inegociáveis, Princípios Eternos</p>
              <ul>
                <li>Patrimônio alinhado a quem você é.</li>
                <li>Decisões financeiras com propósito.</li>
                <li>Liberdade real, não aparência de liberdade.</li>
                <li>Legado que atravessa gerações.</li>
              </ul>
            </div>
          </div>
          <p className="vip-vipe-quote">Seus gastos são um reflexo dos seus valores. Se o extrato não combina com o que você acredita, algo está errado.</p>
          
          {/* BLOCO 3: A JORNADA */}
          <div className="jornada-section">
            <h2 className="jornada-title">Sua jornada no Método VIPE</h2>
            <p className="jornada-subtitle">4 níveis. Da raiz ao topo. Sem atalhos.</p>
            <div className="jornada-piramide">
              <div className="jornada-nivel jornada-nivel-4">
                <span className="jornada-label">↗ Nível 04</span>
                <h4>Viver com propósito</h4>
                <p className="jornada-tech"><em>Life Wealth</em></p>
                <p>Viva seu propósito com suas finanças estruturadas, domine sobre seu patrimônio e um legado que seus filhos vão herdar.</p>
              </div>
              <div className="jornada-nivel jornada-nivel-3">
                <span className="jornada-label">Nível 03</span>
                <h4>O plano de ação</h4>
                <p className="jornada-tech"><em>Plano Mestre</em></p>
                <p>Orçamento e investimentos desenhados para seu perfil e com tempo trabalhando pra você — não para o banco.</p>
              </div>
              <div className="jornada-nivel jornada-nivel-2">
                <span className="jornada-label">Nível 02</span>
                <h4>O Contentamento Financiado</h4>
                <p className="jornada-tech"><em>Prioridades</em></p>
                <p>Calculamos o número exato que você precisa para viver em paz, sem escassez e com tempo pro que mais importa.</p>
              </div>
              <div className="jornada-nivel jornada-nivel-1">
                <span className="jornada-label">↓ Nível 01</span>
                <h4>Quem você é</h4>
                <p className="jornada-tech"><em>Identidade e Propósito</em></p>
                <p>Antes de falar de dinheiro, descobrimos seu propósito, por quem e pra quem você quer que você terá sucesso financeiro.</p>
              </div>
            </div>
          </div>
          
          <p className="verse">"Os planos bem elaborados levam à fartura." — Provérbios 21:5</p>
          
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{marginTop: '24px'}}>Quero começar minha jornada →</a>
        </div>
      </section>

      {/* ENERGIA VITAL */}
      <section className="section" id="energia-vital">
        <div className="container">
          <p className="section-tag">Energia Vital</p>
          <h2 className="section-title">O custo real da sua vida — o que ninguém te conta</h2>
          <p className="section-subtitle">Você pode ter R$ 50mil/mês e ainda estar quebrado. Sem saber o custo real, você não sabe se está gerando riqueza ou apenas sobrevivendo com conforto.</p>
          
          <div className="energia-grid">
            <div className="energia-card">
              <div className="energia-icon">📊</div>
              <h3>Cálculo da Energia Vital</h3>
              <p>Custo real mensal de moradia, alimentação, transporte e lifestyle — não em números frios, mas em tempo e energia.</p>
            </div>
            <div className="energia-card">
              <div className="energia-icon">🔍</div>
              <h3>Comparação Percebido x Real</h3>
              <p>O que você acha que gasta vs. o que realmente sai do seu bolso. A diferença pode ser chocante.</p>
            </div>
            <div className="energia-card">
              <div className="energia-icon">💸</div>
              <h3>Vazamentos Invisíveis</h3>
              <p>Assinaturas esquecidas, gastos simbólicos e pequenas decisões que erodem seu patrimônio.</p>
            </div>
            <div className="energia-card">
              <div className="energia-icon">⏱️</div>
              <h3>Projeção de Sustentabilidade</h3>
              <p>Quanto tempo você pode manter esse padrão? Projeção de 10, 20, 30 anos à frente..</p>
            </div>
          </div>
          
          <div className="energia-depoimento">
            <p>"Com o Método VIPE, descobri uma economia de R$2.505/mês que eu nem sabia que existia."</p>
            <cite>— Dr. Rafael | Médico</cite>
          </div>
          
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Calcular minha Energia Vital →</a>
        </div>
      </section>

      {/* CÓDIGO DA FAMÍLIA */}
      <section className="section section-alt" id="codigo-familia">
        <div className="container">
          <p className="section-tag">Código da Família</p>
          <h2 className="section-title">O antídoto contra a #1 causa de divórcio</h2>
          <p className="section-subtitle">70% dos divórcios no Brasil têm o dinheiro como causa principal. O problema raramente é "falta de dinheiro" — é falta de alinhamento.</p>
          
          <div className="codigo-grid">
            <div className="codigo-card">
              <div className="codigo-num">01</div>
              <h3>Proteção</h3>
              <p>Como nos protegemos de riscos? Seguros, reservas, planejamento de emergência.</p>
            </div>
            <div className="codigo-card">
              <div className="codigo-num">02</div>
              <h3>Propósito</h3>
              <p>Para que estamos construindo juntos? Metas compartilhadas e visão de futuro.</p>
            </div>
            <div className="codigo-card">
              <div className="codigo-num">03</div>
              <h3>Legado</h3>
              <p>O que queremos deixar para nossos filhos? Valores e patrimônio que atravessam gerações.</p>
            </div>
          </div>
          
          <p className="codigo-highlight">Diga adeus a briga em casa por dinheiro.</p>
          
          <div className="codigo-depoimento">
            <p>"Éramos complementares, não incompatíveis! O Código da Família mudou nossa dinâmica."</p>
            <cite>— João e Ana | Casal — Plano Legado</cite>
          </div>
          
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Alinhar minha família →</a>
        </div>
      </section>

      {/* 5. PERFIS VIPE ID */}
      <section className="section section-alt" id="perfis">
        <div className="container">
          <p className="section-tag">VIPE ID</p>
          <h2 className="section-title">Descubra seu perfil financeiro</h2>
          <p className="section-subtitle">Pessoas com o mesmo salário tomam decisões radicalmente diferentes — porque seus perfis são diferentes.</p>
          
          <div className="perfis-grid">
            <div className="perfil-card" style={{background: COLORS.navy, borderTop: '3px solid #1B3A5C'}}>
              <h3>Guardião Prudente</h3>
              <p>Cauteloso, busca segurança</p>
              <p className="perfil-extra">Entra em pânico com longos financiamentos</p>
            </div>
            <div className="perfil-card" style={{background: '#1A3A2A', borderTop: '3px solid #2D5A3D'}}>
              <h3>Construtor Analítico</h3>
              <p>Racional, detalhista</p>
              <p className="perfil-extra">Precisa de dados antes de cada decisão</p>
            </div>
            <div className="perfil-card" style={{background: '#3A2A10', borderTop: '3px solid #8B6914'}}>
              <h3>Visionário Ousado</h3>
              <p>Inovador, otimista</p>
              <p className="perfil-extra">Usa financiamento como alavancagem</p>
            </div>
            <div className="perfil-card" style={{background: '#2A1A40', borderTop: '3px solid #6B3FA0'}}>
              <h3>Explorador Generoso</h3>
              <p>Experiências, contribuir</p>
              <p className="perfil-extra">Gasta em experiências para os outros</p>
            </div>
            <div className="perfil-card" style={{background: '#1A2A35', borderTop: '3px solid #4A6B80'}}>
              <h3>Estrategista Consciente</h3>
              <p>Equilibrado, ponderado</p>
              <p className="perfil-extra">Equilibra emoção e razão naturalmente</p>
            </div>
          </div>
          
          <div style={{textAlign: 'center', marginTop: 32}}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Descubra seu perfil gratuitamente →</a>
          </div>
        </div>
      </section>

      {/* 6. SERVIÇOS */}
      <section className="section" id="servicos">
        <div className="container">
          <p className="section-tag">O Arsenal</p>
          <h2 className="section-title">Nossos serviços</h2>
          <p className="section-subtitle">Um ecossistema completo para viver com propósito, segurança e visão.</p>
          
          <div className="servicos-grid">
            <div className="servico-card">
              <div className="servico-icon">🧠</div>
              <h3>Diagnóstico Comportamental</h3>
              <p>Por que você toma decisões financeiras que sabe que são erradas? Nós descobrimos.</p>
            </div>
            <div className="servico-card">
              <div className="servico-icon">👨‍👩‍👧‍👦</div>
              <h3>Código da Família</h3>
              <p>70% dos divórcios têm o dinheiro como causa. O problema não é falta de dinheiro — é falta de alinhamento.</p>
            </div>
            <div className="servico-card">
              <div className="servico-icon">📊</div>
              <h3>Método VFP</h3>
              <p>Aquele imóvel, aquele carro, aquela sociedade - nossa ferramenta te direciona a melhor solução com cenários matemáticos</p>
            </div>
            <div className="servico-card">
              <div className="servico-icon">📱</div>
              <h3>Gerenciador Financeiro com IA</h3>
              <p>Seu dinheiro organizado e integrado as soluções para mudar seus hábitos financeiros.</p>
            </div>
            <div className="servico-card">
              <div className="servico-icon">💰</div>
              <h3>Inteligência Financeira</h3>
              <p>Você sabe o que seu banco cobra de você? E anuidade do seu cartão? O mundo bancário revelado — use o sistema a seu favor.</p>
            </div>
            <div className="servico-card">
              <div className="servico-icon">🛡️</div>
              <h3>Gestão Patrimonial</h3>
              <p>Seus investimentos te deixam dormir tranquilo ou acordar às 3h? Raio-X completo do seu patrimônio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PLANOS */}
      <section className="section section-alt" id="planos">
        <div className="container">
          <p className="section-tag">Os Planos</p>
          <h2 className="section-title">Escolha sua jornada</h2>
          
          <div className="planos-grid">
            <div className="plano-card">
              <h3 className="plano-nome">ESTANDARTE</h3>
              <p className="plano-price">Sob Consulta</p>
              <p className="plano-tag">O início da jornada</p>
              <ul className="plano-features">
                <li><strong>VIPE ID</strong><br/><em style={{fontSize:'0.8rem',color:'#7A8A9A'}}>Como seu cérebro toma decisões financeiras.</em></li>
                <li><strong>Money Scripts</strong><br/><em style={{fontSize:'0.8rem',color:'#7A8A9A'}}>Identifique as crenças invisíveis que sabotam seu patrimônio.</em></li>
                <li><strong>Vieses Cognitivos</strong><br/><em style={{fontSize:'0.8rem',color:'#7A8A9A'}}>As 12 armadilhas mentais que te fazem perder dinheiro.</em></li>
                <li><strong>Gerenciador Financeiro com IA</strong><br/><em style={{fontSize:'0.8rem',color:'#7A8A9A'}}>Seu dinheiro organizado e conectado aos seus bancos em tempo real.</em></li>
                <li><strong>Método VFP</strong><br/><em style={{fontSize:'0.8rem',color:'#7A8A9A'}}>Parecer matemático antes de cada decisão financeira importante.</em></li>
                <li><strong>Inteligência Financeira</strong><br/><em style={{fontSize:'0.8rem',color:'#7A8A9A'}}>O mundo bancário revelado — use o sistema a seu favor.</em></li>
                <li><strong>Gestão de Patrimônio</strong><br/><em style={{fontSize:'0.8rem',color:'#7A8A9A'}}>Raio-X completo e estratégia para cada real do seu patrimônio.</em></li>
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{width: '100%', textAlign: 'center'}}>Saiba mais</a>
            </div>
            
            <div className="plano-card featured">
              <span className="plano-badge">Mais Popular</span>
              <h3 className="plano-nome">LEGADO</h3>
              <p className="plano-price">Sob Consulta</p>
              <p className="plano-tag">Transformação completa</p>
              <ul className="plano-features">
                <li><strong>Tudo do Estandarte +</strong><br/><em style={{fontSize:'0.8rem',color:'#7A8A9A'}}>Todas as 7 ferramentas incluídas.</em></li>
                <li><strong>Código da Família</strong><br/><em style={{fontSize:'0.8rem',color:'#7A8A9A'}}>Diga adeus a briga em casa por dinheiro.</em></li>
                <li><strong>Energia Vital</strong><br/><em style={{fontSize:'0.8rem',color:'#7A8A9A'}}>Saiba quanto custa sua vida.</em></li>
                <li><strong>DNA Organizacional</strong><br/><em style={{fontSize:'0.8rem',color:'#7A8A9A'}}>Alinhe visão, valores e finanças com seus sócios.</em></li>
                <li><strong>Kingdom's Seed</strong><br/><em style={{fontSize:'0.8rem',color:'#7A8A9A'}}>Rede de empresários cristão que fazem negócios com propósito.</em></li>
                <li><strong>VIPE Assessment</strong><br/><em style={{fontSize:'0.8rem',color:'#7A8A9A'}}>Análise comportamental profunda — perfil natural vs. adaptado.</em></li>
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{width: '100%', textAlign: 'center'}}>Começar agora</a>
            </div>
            
            <div className="plano-card">
              <h3 className="plano-nome">CONSELHO VIPE</h3>
              <p className="plano-price">Customizado</p>
              <p className="plano-tag">Gestão de elite</p>
              <ul className="plano-features">
                <li><strong>Tudo do Legado +</strong><br/><em style={{fontSize:'0.8rem',color:'#7A8A9A'}}>Todas as ferramentas anteriores incluídas.</em></li>
                <li><strong>Segurança Jurídica</strong><br/><em style={{fontSize:'0.8rem',color:'#7A8A9A'}}>Proteção legal para seu patrimônio e operações.</em></li>
                <li><strong>Otimização Tributária</strong><br/><em style={{fontSize:'0.8rem',color:'#7A8A9A'}}>Pague menos impostos dentro da lei — cada centavo conta.</em></li>
                <li><strong>Planejamento Sucessório</strong><br/><em style={{fontSize:'0.8rem',color:'#7A8A9A'}}>Garanta que seu legado llegue às próximas gerações sem perdas.</em></li>
                <li><strong>Estruturação de Holdings</strong><br/><em style={{fontSize:'0.8rem',color:'#7A8A9A'}}>Proteção e multiplicação do patrimônio com estrutura societária.</em></li>
                <li><strong>Time Multidisciplinar</strong><br/><em style={{fontSize:'0.8rem',color:'#7A8A9A'}}>Advogados, contadores e especialistas dedicados ao seu caso.</em></li>
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{width: '100%', textAlign: 'center'}}>Saiba mais</a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. DEPOIMENTOS */}
      <section className="section section-alt" id="depoimentos">
        <div className="container">
          <p className="section-tag">Transformações Reais</p>
          <h2 className="section-title">Vidas que mudaram</h2>
          
          <div className="depoimentos-grid">
            <div className="depoimento-card">
              <blockquote>"Não transformamos só nossas finanças, restaurou nosso casamento e nos deu propósito claro. Em 6 meses saímos de R$120mil em dívidas para R$87mil investidos."</blockquote>
              <cite>— Eduardo e Mariana | Casal — Plano Estandarte</cite>
            </div>
            <div className="depoimento-card">
              <blockquote>"Éramos complementares, não incompatíveis! Hoje somos exemplo para outros casais. O Código da Família mudou nossa dinâmica."</blockquote>
              <cite>— João e Ana | Casal — Plano Legado</cite>
            </div>
            <div className="depoimento-card">
              <blockquote>"Com o Método VIPE, descobri uma economia de R$2.505/mês que eu nem sabia que existia. Minha projeção para 10 anos é de R$523 mil."</blockquote>
              <cite>— Dr. Rafael | Médico — Plano Estandarte</cite>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA FINAL */}
      <section className="section" id="cta">
        <div className="container">
          <p className="section-tag">Comece Sua Transformação</p>
          <h2 className="section-title">De que lado você quer estar?</h2>
          <p className="cta-urgencia">Cada dia que passa, R$ 115 se vão do seu patrimônio.</p>
          
          <div className="cta-cards">
            <div className="cta-card cta-banco">
              <h3>O Banco</h3>
              <p>quer sua taxa</p>
            </div>
            <div className="cta-card cta-guru">
              <h3>O Guru</h3>
              <p>quer seu like</p>
            </div>
            <div className="cta-card cta-castelo">
              <h3>A Castelo Forte</h3>
              <p>quer o seu Legado</p>
            </div>
          </div>
          
          <div className="cta-final-box">
            <h2>Sessão de Diagnóstico Gratuita</h2>
            <p>60 minutos para descobrir seu perfil VIPE ID, identificar o gargalo #1 das suas finanças e calcular quanto você está perdendo por mês.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{fontSize: '1rem', padding: '16px 40px'}}>Agendar pelo WhatsApp</a>
          </div>
          
          <p className="verse">"O homem de bem deixa herança para os filhos de seus filhos." — Provérbios 13:22</p>
        </div>
      </section>

      {/* NOSSA HISTÓRIA */}    <section className="section" id="historia">
        <div className="container">
          <p className="section-tag">Nossa História</p>
          <h2 className="section-title">O Castelo Forte</h2>
          <p className="section-subtitle">15 anos nos maiores bancos do país. Uma missão: proteger quem construye.</p>
          
          <div className="historia-manifesto">
            <blockquote>Se alguém te prometeu riqueza, cuidado.</blockquote>
            <p>Passamos 15 anos dentro dos maiores bancos do país. Vimos coisas que ninguém te conta.</p>
            <p>Eu vi pessoas ganando mais de 50 mil por mês… falidas emocionalmente.</p>
            <p>Vi famílias destruídas pordinheiro. Vi pessoas honestas com medo de boleto.</p>
            <p>E mesmo assim… o mercado continua prometendo riqueza. Mas me responde… Quem consegue garantir o amanhã?</p>
            <div className="historia-divider"></div>
            <h3>Existe uma guerra pelo seu patrimônio agora.</h3>
            <ul>
              <li>De um lado: o sistema bancário lucrando 140 bilhões com a sua desorganização.</li>
              <li>Do outro: os gurus vendendo milagres que alimenta a sua ganância.</li>
              <li>E você está no meio, vivendo no piloto automático, pagando o custo do amanhã que nunca chega.</li>
            </ul>
            <p className="historia-final">Porque o problema não é o conhecimento… é sim como você se comporta em relação ao dinheiro.</p>
            <p>A ciência já provou: <strong>80% comportamento e 20% conhecimento</strong></p>
            <p>Aliamos a nossa experiência do mercado financeiro com o entendimento profundo de como a mente humana se comporta em relação ao dinheiro.</p>
            <div className="historia-quote">
              <p>"Afinal, riqueza não se constrói com promessa. Se constrói com princípios."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="footer">
        <div className="container">
          <Link href="/" className="footer-logo">
            <Image src="/logo.png" alt="Castelo Forte" width={140} height={30} style={{height:'auto'}} />
          </Link>
          <p className="footer-verse">"Onde estiver o seu tesouro, ali estará também o seu coração." — Mateus 6:21</p>
          <p className="footer-copy">© 2025 Castelo Forte Group</p>
        </div>
      </footer>

      {/* Botão flutuante WhatsApp */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="wa-float">
        <span className="wa-tooltip">Fale conosco</span>
        <svg viewBox="0 0 32 32" fill="white" width="28" height="28">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.385.596 4.634 1.643 6.571L2 28l5.293-2.643C8.245 25.73 9.52 26 10.843 26c7.732 0 14-6.268 14-14S23.732 2 16 2zm-1.143 4.571c-1.143-.571-2.143-1.143-2.857-1.857-.071.357-.143.857-.143 1.286 0 2.571 1.857 5.143 4.286 6.857 2.429 1.714 5.143 2.571 5.571 2.571.429 0 1.286-.286 1.857-.571.571-.286.857-.571 1.143-.857.143-.357.286-.857.143-1.286-.143-.571-.857-1.143-1.429-1.571-.571-.429-1.571-.857-2.143-1.143-1.286-.571-2.571-1.143-3.571-2.286-1-1.143-1.571-2.143-1.857-2.857zm4.857 9.143c-.571.286-1.571.571-2.429.286-1.286-.429-2.571-1.286-3.571-2.857-1.571-2.429-2.143-5.143-1.571-6.857.286-.857.857-1.571 1.571-2.143.429-.357.857-.571 1.143-.714.286-.143.571-.143.786.143.214.286.571.857.714 1.143.143.286.143.571-.143.857-.286.286-.571.571-.857.714-.286.143-.571.286-.857.286-.429 0-.857-.143-1.286-.429-.571-.429-1.143-1.143-1.429-1.571-.571-.714-1-1.286-1.286-1.286-.286 0-.571.143-.786.429-.214.286-.714.857-1 1.429-.286.571-.571 1.143-.286 2 .286.857 1 2.571 2.286 3.714 1.286 1.143 2.571 1.714 3.429 2 1.143.429 1.857.357 2.571-.143.714-.5 2.857-2.143 3.429-2.571.571-.429.714-.714 1-.571.286.143.571.571.714.857.143.286.143.571-.143.857z"/>
        </svg>
      </a>
    </main>
  )
}