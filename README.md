# 🌿 Relevo Consultoria Ambiental - Site Institucional

## 📋 Sobre o Projeto

Site institucional da **Relevo Consultoria Ambiental**, especializada em espeleologia e licenciamento ambiental. O projeto apresenta uma presença digital moderna, responsiva e profissional, refletindo a expertise da empresa na proteção de cavernas e viabilização de empreendimentos sustentáveis.

## 🎯 Estrutura do Site

### 📄 Páginas Desenvolvidas

1. **`index.html`** - Página inicial com apresentação e diferenciais
2. **`quem-somos.html`** - Missão, visão, valores e equipe
3. **`servicos.html`** - Portfólio completo de serviços ambientais
4. **`reserva-tecnica.html`** - Legislação e informações espeleológicas
5. **`fale-conosco.html`** - Canais de contato e formulário
6. **`intranet.html`** - Acesso ao portal interno

## 🛠 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização com variáveis e Grid/Flexbox
- **JavaScript** - Interatividade e animações
- **Font Awesome 6.5.0** - Ícones
- **Google Fonts (Montserrat)** - Tipografia
- **Zoho Forms** - Integração de formulários

## 🎨 Design System

### 🎨 Cores Principais
```css
--primary-color: #26C04C      /* Verde principal */
--primary-dark: #396B45       /* Verde escuro */
--secondary-color: #EB8807    /* Laranja/âmbar */
--accent-dark: #2D4132        /* Verde musgo */
--accent-brown: #6B5539       /* Marrom terroso */
--light-color: #f8f9fa        /* Fundo claro */
```

### 📐 Componentes
- **Header** fixo com navegação responsiva
- **Hero Sections** com imagens de fundo
- **Cards** com hover effects
- **Grids** responsivos (2, 3, 4 colunas)
- **Buttons** com estados de hover
- **Accordions** para conteúdo expansível

## 📁 Estrutura de Arquivos

```
relevo-consultoria/
├── index.html
├── quem-somos.html
├── servicos.html
├── reserva-tecnica.html
├── fale-conosco.html
├── intranet.html
├── assets/
│   ├── css/
│   │   └── styles.css          # Estilos principais (728 linhas)
│   ├── js/
│   │   └── script.js           # JavaScript funcional
│   └── img/
│       ├── logo/
│       │   └── Logo_Relevo_Verde.png
│       ├── icons/              # Ícones das seções
│       ├── hero/               # Imagens hero sections
│       ├── equipe/             # Fotos da equipe
│       ├── servicos/           # Imagens dos serviços
│       ├── reserva-tecnica/    # Imagens reserva técnica
│       └── contato/            # Imagens de contato
└── README.md
```

## 🚀 Funcionalidades Principais

### 🌐 Navegação
- Menu responsivo com efeito hover
- Scroll suave entre seções
- Indicador de progresso de scroll
- Navegação por âncora

### 📱 Responsividade
- **Desktop**: Layout completo (1200px+)
- **Tablet**: Grids adaptáveis (768px - 1199px)
- **Mobile**: Design mobile-first (até 767px)

### ✨ Animações
- Fade-in nas seções
- Hover effects em cards e botões
- Transições suaves
- Accordions interativos

## 🔧 Características Técnicas

### ✅ SEO Otimizado
- Meta tags descritivas
- Estrutura semântica HTML5
- Títulos hierárquicos
- Alt texts em imagens

### ✅ Performance
- CSS otimizado e minificado
- Imagens comprimidas
- Carregamento lazy (se necessário)
- Fontes externas otimizadas

### ✅ Acessibilidade
- Navegação por teclado
- Contrastes de cores adequados
- Labels descritivos
- ARIA attributes quando necessário

## 📞 Integrações

### 🔗 Formulários
- **Zoho Forms** integrado em `fale-conosco.html`
- Formulário de contato responsivo
- Validação nativa do navegador

### 🔗 Redes Sociais
- WhatsApp (2 números)
- Instagram (@relevo.eco)
- LinkedIn corporativo
- E-mail institucional

## 🎯 Páginas Específicas

### 🏠 Home (`index.html`)
- Apresentação institucional
- Diferenciais competitivos
- Processo de trabalho
- Call-to-actions estratégicos

### 👥 Quem Somos (`quem-somos.html`)
- Missão, Visão e Valores
- Rede multidisciplinar
- Especialidades da equipe
- Cultura organizacional

### 🔧 Serviços (`servicos.html`)
- Menu interno de navegação
- 6 categorias de serviços
- Figuras técnicas
- Especificações por serviço

### 📚 Reserva Técnica (`reserva-tecnica.html`)
- Legislação ambiental federal e estadual
- Notícias espeleológicas atualizadas
- Recursos para pesquisa
- Base técnica especializada

### 📞 Fale Conosco (`fale-conosco.html`)
- Múltiplos canais de contato
- Formulário Zoho integrado
- Política de privacidade
- Redes sociais

### 🔐 Intranet (`intranet.html`)
- Acesso ao portal interno
- Recursos para colaboradores
- Área restrita

## 🌐 Deploy e Hospedagem

### 📦 Pré-requisitos
- Servidor web (Apache, Nginx, etc.)
- HTTPS recomendado
- Suporte a HTML5/CSS3/ES6+

### 🔧 Configurações Recomendadas
```nginx
# Exemplo de configuração Nginx
server {
    listen 80;
    server_name relevo.eco.br;
    root /var/www/relevo-consultoria;
    index index.html;
    
    # Configurações de cache para assets
    location ~* \.(css|js|png|jpg|jpeg|gif|ico)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 🔄 Manutenção e Atualizações

### 📝 Conteúdo Dinâmico
- **Notícias**: Atualizar em `reserva-tecnica.html`
- **Equipe**: Modificar em `quem-somos.html`
- **Serviços**: Ajustar em `servicos.html`
- **Legislação**: Revisar periodicamente

### 🛠 Desenvolvimento Futuro
- [ ] Sistema de blog integrado
- [ ] Galeria de projetos
- [ ] Área do cliente
- [ ] Integração com CRM
- [ ] Chat online

## 👥 Equipe de Desenvolvimento

**Relevo Consultoria Ambiental**
- **Especialização**: Espeleologia e Licenciamento Ambiental
- **Localização**: Brasília/DF
- **Atuação**: Nacional

## 📞 Suporte

Para questões técnicas relacionadas ao site:
- **E-mail**: contato@relevo.eco.br
- **WhatsApp**: +55 (61) 98152-3078
- **LinkedIn**: Relevo Consultoria Ambiental

## 📄 Licença

© 2025 Relevo Consultoria Ambiental. Todos os direitos reservados.

---

**Última atualização**: Outubro de 2025  
**Versão do Site**: 1.0  
**Status**: ✅ Produção
