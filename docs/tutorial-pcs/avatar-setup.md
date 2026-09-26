---
title: Installation
hide_title: false
---

import useBaseUrl from '@docusaurus/useBaseUrl';
 
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/mnCVAWUmU3I"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
/>

:::info Info
This guide will always be based on the latest version. Previous versions may have slightly different menu buttons and procedures.
:::

### Requirements
- `VRChat SDK` : **3.10.4** or higher (using the latest version is strongly recommended).
- `Modular Avatar / VRCFury` : [Modular Avatar](https://modular-avatar.nadena.dev/) or [VRCFury](https://vrcfury.com/)

### Package Installation
- Download and import `PCS vX.X.X.unitypackage` to your avatar project.

:::info Info
If you already have PCS installed and about to update, you should uninstall and delete it before importing a newer package and re-install to ensure all files are up to date.
:::

### Setup PCS Installer
- Open the installer tool at the top bar : `Dismay Custom > Penetration Contact System > PCS Installer`
- Watch the video and change the settings as you preferred.

<img src={useBaseUrl('/img/pcs-setup-tool.png')} width="540" />

---

### Click Apply (Deprecated)
:::warning Notice
This step is only required for versions lower than v1.11.0. For newer versions, you can just skip this step.
:::

After clicking the apply button, PCS will be installed to your selected avatar. And done!

<img src={useBaseUrl('/img/pcs-apply.png')} width="540" />

---

### Note For Avatar Creator / Avatar Seller
:::info Info
If you’re exporting an avatar with PCS pre-installed, click `Pre-Installed (Apply)` first to finalize the PCS prefab and its assets. Otherwise, those assets may be lost or overwritten.
:::

## Optional Steps
These are optional steps that you may skip.

### Change PCS Menu Location
Select `Penetraion Contact System` gameObject, and follow these step depends on the avatar tool that you choose.

<img src={useBaseUrl('/img/pcs-menu-prefix1.png')} width="540" />
- For **VRCFury**,  you can add menu prefix to place PCS menu inside it. For example, assign `NSFW` will make PCS menu appear as a sub-menu inside NSFW menu.

<img src={useBaseUrl('/img/pcs-menu-prefix2.png')} width="540" />
- For **Modular Avatar**, you can click `Select Menu` button and select any menu you want PCS to be inside.

### Position Adjustment
You can move or rotate `<PCS Target> XXX` to achieve more precise positioning. 
These positions determine where PCS will be attached to when selected through the menu. The position guide marker will indicate which direction it should be facing.
<img src={useBaseUrl('/img/pcs-guide1.png')} width="540" />

### Scale Adjustment
You can adjust the size of `PCS Contacts` to make PCS larger or smaller as needed. In some cases, PCS may appear too small on certain avatars due to an unusual Armature scale.
<img src={useBaseUrl('/img/pcs-guide2.png')} width="540" />

### Quick Access Menu
<img src={useBaseUrl('/img/pcs-quick-access.png')} width="540" />