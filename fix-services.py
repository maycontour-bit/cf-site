import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

content = re.sub(
    r'(<h3>Diagnóstico Comportamental</h3>\s*<p>).*?(</p>)',
    r'\1Por que você toma decisões financeiras que sabe que são erradas? Nós descobrimos.\2',
    content, flags=re.DOTALL
)

content = re.sub(
    r'(<h3>Código da Família</h3>\s*<p>).*?(</p>)',
    r'\170% dos divórcios têm o dinheiro como causa. O problema não é falta de dinheiro — é falta de alinhamento.\2',
    content, flags=re.DOTALL
)

content = re.sub(
    r'(<h3>Método VFP</h3>\s*<p>).*?(</p>)',
    r'\1Aquele imóvel, aquele carro, aquela sociedade — você fez a conta de verdade antes de assinar?\2',
    content, flags=re.DOTALL
)

content = re.sub(
    r'(<h3>APP Castelo Forte</h3>\s*<p>).*?(</p>)',
    r'\1Quantos apps e bancos você usa? E ainda não sabe para onde vai o dinheiro? Aqui tudo se conecta.\2',
    content, flags=re.DOTALL
)

content = re.sub(
    r'(<h3>Inteligência Financeira</h3>\s*<p>).*?(</p>)',
    r'\1Você sabe o que seu banco cobra de você? E anuidade do seu cartão? O mundo bancário revelado — use o sistema a seu favor.\2',
    content, flags=re.DOTALL
)

content = re.sub(
    r'(<h3>Gestão Patrimonial</h3>\s*<p>).*?(</p>)',
    r'\1Seus investimentos te deixam dormir tranquilo ou acordar às 3h? Raio-X completo do seu patrimônio.\2',
    content, flags=re.DOTALL
)

with open('app/page.tsx', 'w') as f:
    f.write(content)
