# Contribuer à WebSpace Desktop

## Écrire un rapport de bogue

### Que doit contenir un rapport
* L'identifiant de votre installation (accessible depuis la page **À propos**, à l'option **Identifiant de la configuration**)
* Les circonstances du bogue
* Comment vous avez obtenu WebSpace Desktop
* Les modifications que vous avez apportés à votre installation, le cas échéant
> L'identifiant de votre installation est important car c'est grâce à ce dernier que nous pourrons savoir de nombreuses informations sur votre configuration, telles que votre système d'exploitation, la version de WebSpace Desktop, et d'autres<br>Sauf erreur, cet identifiant ne devrait pas contenir d'informations personnelles, nous modifierons votre ticket si nous voyons que votre rapport en contient.

### Comment écrire un rapport
Nous vous conseillons de suivre ces exemples, pensez aussi à donner un titre cohérent à votre ticket :

#### Rapport en français
> **Identifiant d'installation :** &lt;collez votre identifiant d'installation ici&gt;<br>
> **Circonstances :** &lt;détaillez ici les circonstances du problème rencontré&gt;<br>
> **Source :** &lt;détaillez ici comment vous avez obtenu WebSpace Desktop&gt;<br>
> **Modifications apportées :** &lt;détaillez ici les modifications que vous avez apportez/ou entrez "aucune" si vous n'en avez pas apporté&gt;<br>

##### Code Markdown
Utilisez ce code dans vos tickets pour styliser votre demande :
```markdown
**Identifiant d'installation :** collez votre identifiant d'installation ici

**Circonstances :** détaillez ici les circonstances du problème rencontrés

**Source :** détaillez ici comment vous avez obtenu WebSpace Desktop

**Modifications apportées :** détaillez ici les modifications que vous avez apporté/ou entrez "aucune" si vous n'en avez pas apporté
```

#### English Report
> **Install ID:** &lt;paste your install id here&gt;<br>
> **Steps to reproduce:** &lt;detail here how to reproduce this bug&gt;<br>
> **Source:** &lt;detail here how you got WebSpace Desktop&gt;<br>
> **Changes Done:** &lt;detail here the changes you done to the code/or enter "none" if you didn't changed the code&gt;<br>

##### Markdown Code
Use this Markdown to style your issue:
```markdown
**Install ID:** paste your install id here

**Steps to reproduce:** detail here how to reproduce this bug

**Source:** detail here how you got WebSpace Desktop

**Changes Done:** detail here the changes you done to the code/or enter "none" if you didn't changed the code
```

## Modifier le code
Le code de WebSpace Desktop est distribué sous licence **GNU GPL3 (ou supérieur)**, vous êtes donc libre de le modifier **et de le publier** comme vous le souhaitez

Si vous apportez des modifications au code, vous êtes **obligé** de les publier afin que tous les utilisateurs puissent en bénéficier.

Si vous pensez que ces modifications peuvent concerner tous les utilisateurs de WebSpace Desktop et qu'elles peuvent être inclues dans le code de base, vous pouvez envoyer une requête de fusion.

**__Attention :__** Si vous envoyez une requête de fusion, il y a quelques règles importantes et questions à vous poser avant de l'envoyer.

### Envoyer une requête de fusion
Vous devez répondre ***Non*** à toutes ces questions pour que votre requête de fusion soit éligible :
* Mon code contient-il des librairies ou du code non libre ?
* Ce code est-il basé sur une ancienne version de WebSpace Desktop, et non sur la version actuelle ?
* Ces modifications améliorent-elles la compatibilité ? Si oui, améliorent-elles la compatibilité avec du matériel/logiciel suffisamment utilisé ?
* Vos modifications ont-elles déjà été proposées via d'autres tickets/requêtes de fusion ?

Ensuite, dans le ticket associé à votre requête de fusion, vous devez suffisamment détailler les modifications.

Notez que **vous ne pouvez pas __utiliser de code compilé__** dans vos modifications pour des raisons de sécurité.

Si vous devez utiliser du code compilé, vous devrez aussi nous fournir le code non compilé.