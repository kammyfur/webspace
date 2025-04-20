# Instructions d'utilisation de WebSpace Portable
WebSpace Portable est une version de WebSpace qui ne nécessite pas d'être installée sur votre appareil.
> La version macOS de WebSpace n'est disponible qu'en version portable

## Windows
> * Compatible avec Windows 7 et supérieur
> * Minimum 128 Mo de RAM libre
> * Minimum 256 Mo d'espace disque libre
> * Processeur au minimum 1 GHz

### Exécution en utilisant PowerShell
1.  Téléchargez le fichier .zip puis décompressez-le
> Vous pouvez aussi télécharger le fichier dans un autre format
2.  Accédez au dossier des fichiers (`cd webspace-desktop-master`)
> Si le dossier porte un autre nom, ou qu'il y a plusieurs dossiers à parcourir, accédez à ces derniers
4.  Exécutez le programme (`.\windows.exe\` ou `.\windows.bat\` si ça ne fonctionne pas)
> N'oubliez pas le `.\` devant, auquel cas le PowerShell cherchera un programme dans votre `PATH` au lieu de chercher dans le dossier courant.

### Exécution en utilisant `cmd.exe`
1.  Téléchargez le fichier .zip puis décompressez-le
> Vous pouvez aussi télécharger le fichier dans un autre format
2.  Accédez au dossier des fichiers (`cd webspace-desktop-master`)
> Si le dossier porte un autre nom, ou qu'il y a plusieurs dossiers à parcourir, accédez à ces derniers
4.  Exécutez le programme (`windows.exe` ou `windows.bat` si ça ne fonctionne pas)
> Spécifiez bien `.exe` (ou `.bat`) à la fin, auquel cas `cmd.exe` exécutera un programme du même nom dans votre `PATH` au lieu de chercher dans le dossier courant.

## GNU/Linux
> * Compatible avec le noyau Linux version 4.2 ou supérieur
> * Minimum 128 Mo de RAM libre
> * Minimum 256 Mo d'espace disque libre
> * Processeur au minimum 1 GHz
1.  Téléchargez le fichier .tar.gz puis décompressez-le
> Vous pouvez aussi télécharger le fichier dans un autre format
2.  Accédez au dossier des fichiers (`cd webspace-desktop-master`)
> Si le dossier porte un autre nom, ou qu'il y a plusieurs dossiers à parcourir, accédez à ces derniers
3.  Autorisez l'exécution du fichier (`chmod +x linux`)
> Notez que vous **ne pouvez pas** utiliser WebSpace Portable depuis un système de fichiers qui ne supporte pas le système de permissions POSIX
4.  Exécutez le programme (`./linux`)
> N'oubliez pas le `./` devant, auquel cas le terminal cherchera un programme dans votre `$PATH` au lieu de chercher dans le dossier courant.

## macOS
> * Compatible avec macOS 10.8 Mountain Lion ou suivant (compatibilité avec macOS 10.15 Catalina non garantie)
> * Minimum 128 Mo de RAM libre
> * Minimum 256 Mo d'espace disque
> * Mac sous processeur Intel 32 ou 64 bits requis
> * [NodeJS](https://nodejs.org) et NPM requis (installés globalement sur le système)

> Notez que la compatibilité avec macOS **N'EST EN AUCUN CAS GARANTIE**, vous êtes seul responsable de tout dommage à votre appareil lors de l'utilisation de WebSpace Desktop sur macOS.

1.  Téléchargez le fichier .tar.gz puis décompressez-le
> Vous pouvez aussi télécharger le fichier dans un autre format
2.  Accédez au dossier des fichiers (`cd webspace-desktop-master`)
> Si le dossier porte un autre nom, ou qu'il y a plusieurs dossiers à parcourir, accédez à ces derniers
3.  Désinstallez et réinstallez Electron (`npm remove electron electron-rebuild` puis `npm install electron electron-rebuild`)
> Désinstaller et réinstaller Electron permet de recompiler Electron pour votre version de macOS
4.  Recompilez les sources (`./node_modules/.bin/electron-rebuild`)
> Désinstaller et réinstaller Electron permet de recompiler Electron pour votre version de macOS
5.  Exécutez le programme (`./linux`)
> N'oubliez pas le `./` devant, auquel cas le terminal cherchera un programme dans votre `$PATH` au lieu de chercher dans le dossier courant.