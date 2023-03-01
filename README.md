# Projet-Web-architecture-Agence-Immobiliere
Projet dans le cadre du cours de architecture web à l'ECAM





% Options for packages loaded elsewhere
\PassOptionsToPackage{unicode}{hyperref}
\PassOptionsToPackage{hyphens}{url}
%
\documentclass[
]{article}
\usepackage{amsmath,amssymb}
\usepackage{lmodern}
\usepackage{iftex}
\ifPDFTeX
  \usepackage[T1]{fontenc}
  \usepackage[utf8]{inputenc}
  \usepackage{textcomp} % provide euro and other symbols
\else % if luatex or xetex
  \usepackage{unicode-math}
  \defaultfontfeatures{Scale=MatchLowercase}
  \defaultfontfeatures[\rmfamily]{Ligatures=TeX,Scale=1}
\fi
% Use upquote if available, for straight quotes in verbatim environments
\IfFileExists{upquote.sty}{\usepackage{upquote}}{}
\IfFileExists{microtype.sty}{% use microtype if available
  \usepackage[]{microtype}
  \UseMicrotypeSet[protrusion]{basicmath} % disable protrusion for tt fonts
}{}
\makeatletter
\@ifundefined{KOMAClassName}{% if non-KOMA class
  \IfFileExists{parskip.sty}{%
    \usepackage{parskip}
  }{% else
    \setlength{\parindent}{0pt}
    \setlength{\parskip}{6pt plus 2pt minus 1pt}}
}{% if KOMA class
  \KOMAoptions{parskip=half}}
\makeatother
\usepackage{xcolor}
\IfFileExists{xurl.sty}{\usepackage{xurl}}{} % add URL line breaks if available
\IfFileExists{bookmark.sty}{\usepackage{bookmark}}{\usepackage{hyperref}}
\hypersetup{
  hidelinks,
  pdfcreator={LaTeX via pandoc}}
\urlstyle{same} % disable monospaced font for URLs
\usepackage{longtable,booktabs,array}
\usepackage{calc} % for calculating minipage widths
% Correct order of tables after \paragraph or \subparagraph
\usepackage{etoolbox}
\makeatletter
\patchcmd\longtable{\par}{\if@noskipsec\mbox{}\fi\par}{}{}
\makeatother
% Allow footnotes in longtable head/foot
\IfFileExists{footnotehyper.sty}{\usepackage{footnotehyper}}{\usepackage{footnote}}
\makesavenoteenv{longtable}
\setlength{\emergencystretch}{3em} % prevent overfull lines
\providecommand{\tightlist}{%
  \setlength{\itemsep}{0pt}\setlength{\parskip}{0pt}}
\setcounter{secnumdepth}{-\maxdimen} % remove section numbering
\ifLuaTeX
  \usepackage{selnolig}  % disable illegal ligatures
\fi

\author{}
\date{}

\begin{document}

\hypertarget{introduction}{%
\section{\texorpdfstring{Introduction~:
}{Introduction~: }}\label{introduction}}

Il s'agit d'un projet d'agence immobilière

\hypertarget{user-stories}{%
\section{User stories~:}\label{user-stories}}

\begin{longtable}[]{@{}
  >{\raggedright\arraybackslash}p{(\columnwidth - 2\tabcolsep) * \real{0.8919}}
  >{\raggedright\arraybackslash}p{(\columnwidth - 2\tabcolsep) * \real{0.1081}}@{}}
\toprule
\begin{minipage}[b]{\linewidth}\raggedright
\textbf{User stories}
\end{minipage} & \begin{minipage}[b]{\linewidth}\raggedright
\textbf{Priorité}
\end{minipage} \\
\midrule
\endhead
\textbf{Gestion des classes de biens} & \\
En tant qu'agence immobilière, je veux pouvoir ajouter un bien d'un
propriétaire dans un lot & 1 \\
En tant qu'agence immobilière, je veux pouvoir supprimer un bien d'un
lot & 1 \\
\multicolumn{2}{l}{\textbf{Gestion d'un bien}} \\
En tant qu'agence immobilière, je veux pouvoir crée un bien & 1 \\
En tant qu'agence immobilière, je veux pouvoir supprimer un bien & 1 \\
En tant qu'agence immobilière, je veux pouvoir modifier un bien & 3 \\
\multicolumn{2}{l}{\textbf{Gérer les locataires}} \\
En tant qu'agence immobilière, je veux pouvoir ajouter un locataire à un
bien & 4 \\
En tant qu'agence immobilière, je veux pouvoir supprimer un locataire
d'un bien & 4 \\
\multicolumn{2}{l}{\textbf{Gérer les problèmes technique}} \\
En tant qu'agence immobilière, je veux pouvoir crée un ticket pour un
problème technique & 2 \\
En tant qu'agence immobilière, je veux pouvoir supprimer un ticket &
3 \\
En tant qu'agence immobilière, je veux pouvoir lister les tickets & 2 \\
En tant qu'agence immobilière, je veux pouvoir associer un devis à un
ticket & 2 \\
\bottomrule
\end{longtable}

\end{document}

