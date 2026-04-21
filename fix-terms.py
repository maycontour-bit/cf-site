import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

# 4A) Nossa História
content = content.replace('Se alguém te prometeu riqueza… cuidado!', 'Se alguém te prometeu riqueza, cuidado.')

# 5) Termos Técnicos
content = content.replace('As 3 Perguntas de Kinder', 'perguntas que revelam seus valores mais profundos')
content = content.replace('3 Perguntas de Kinder', 'perguntas que revelam seus valores mais profundos')
content = content.replace('Funded Contentment', 'o cálculo exato da sua paz financeira')
content = content.replace('BBK', '')
content = content.replace('BB&K', '')

with open('app/page.tsx', 'w') as f:
    f.write(content)
