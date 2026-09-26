import useBaseUrl from '@docusaurus/useBaseUrl';

# How to Use

Since PCS uses the Avatar Contact system for detection. Therefore, you must enable player-to-player contact permissions in the game setting menu. Otherwise, PCS will not work!

By default, the system can detect penetration or interaction with SPS Plugs and the avatar’s hands.
- If you would like PCS to detect interactions with other objects beyond these, please refer to [How to Add Contact](./faq#how-to-add-a-contact-and-make-it-interact-with-pcs)

## Setting Avatar Interaction
These are the required in-game settings that must be configured to enable the Avatar Contact system.
<img src={useBaseUrl('/img/pcs-contact-setting.png')} width="540" />
- **Pause Avatar Interaction** > `OFF`
- **Avatar Allowed to Interact** > `Friends, Everyone`
- **Avatar Self Interact** > `ON`

## Power On!
1. Go inside the PCS menu and toggle `ON` the menu named **ON/OFF**
2. Select the sound in the **Sounds & Positions** menu as you like to use.
   - Only one sound or position can be selected at a time due to VRChat audio limitation.
   - The sound and position are linked, unless you use the custom position menu to override them.
3. Getting penetrated from a finger or SPS Plug to generate sounds.

:::tip Tip
If you are in the Insertive Role (the one who performs the movement), you can use **Self-Service** mode for easier triggering.
This menu allows you to generate sounds based on your own movements, even without interacting with another person.
:::

## Explanation of PCS Menu

| Image | Description |
|---|---|
| <img src={useBaseUrl('/img/menu/pcs-menu-on-off.png')} width="128" /> | <div><strong>On/Off</strong><br/>This is the master switch to control all functions. Disable this will stop all functions</div> |
| <img src={useBaseUrl('/img/menu/pcs-menu-self-service.png')} width="128" /> | <div><strong>Self-Service</strong><br/>When **Self-Service** is enabled, your avatar will stop responding to actions from other players and objects, it will only react to your own movements (move to create sounds).</div> |
| <img src={useBaseUrl('/img/menu/pcs-menu-smash.png')} width="128" /> | <div><strong>Smash Hit</strong><br/>This menu is used to enable or disable body impact sounds.</div> |
| <img src={useBaseUrl('/img/menu/pcs-menu-self-touch.png')} width="128" /> | <div><strong>Self-Touch</strong><br/>This menu controls the self-interaction feature. When enabled, the avatar owner can trigger sounds through self-contact, generate sounds from owner's fingers or objects. When disabled, the owner will not be able to touch themselves. Other players will still be able to interact with you.</div> |

:::tip Tip
When toggle on your own SPS plug while having PCS enabled with their position overlapped, PCS may eventually become interrupted and stuck. This due to it can detect owner's plug. Turning off `Self-Touch` will resolve this issue where it will ignore owner's plug interaction while still remain interact with other's.
:::

| Image | Description |
|---|---|
| <img src={useBaseUrl('/img/menu/pcs-menu-auto-detect.png')} width="128" /> | <div><strong>Auto-Detect</strong><br/>When this menu is enabled, PCS will automatically switch the sound selection menu where the interaction is currently occurring.</div> |
| <img src={useBaseUrl('/img/menu/pcs-menu-offset2.png')} width="128" /> | <div><strong>Detection Offset (Deprecated)</strong><br/>This menu allows you to rotate the detector to different angles. It is highly useful in practice, especially if you experience detection interruptions while performing complex poses, such as standing sex positions, which increases the chance of detection failure due to front-back movement that does not align with the direction of the hole (up-down).</div> |
| <img src={useBaseUrl('/img/menu/pcs-menu-force-orgasm.png')} width="128" /> | <div><strong>Force Orgasm</strong><br/>This button will instantly trigger climax event for your avatar, playing the corresponding fluid sound, voice, and visual effects. If you enable the **Lust Feature**, your arousal value will also be automatically set to maximum. You can also hold this menu button to perform endless squirt.</div> |
| <img src={useBaseUrl('/img/menu/pcs-menu-squirt.png')} width="128" /> | <div><strong>Squirting</strong><br/>When this menu is enabled, every penetration whether by fingers, objects, or any custom interaction with PCS will trigger a small amount of squirt particles in sync with the motion.</div> |
| <img src={useBaseUrl('/img/menu/pcs-menu-edging.png')} width="128" /> | <div><strong>Edging (Stop Lust)</strong><br/>When this menu is enabled, PCS will temporarily stop increasing the arousal value. Regardless of any interactions, the arousal level will remain fixed. This prevents early orgasm :)</div> |
| <img src={useBaseUrl('/img/menu/pcs-menu-voice.png')} width="128" /> | <div><strong>Voice</strong><br/>This menu is used to enable or disable moaning voice. Only if you use any Voice Pack, this option will be shown in the menu.</div> |
| <img src={useBaseUrl('/img/menu/pcs-menu-reset.png')} width="128" /> | <div><strong>Reset</strong><br/>This button is used to reset the entire system. It also resets the arousal value back to 0, allowing you to start again after a climax.</div> |

## Sounds & Positions Menu
This is a sub-menu used to switch the detector position and sound (sound selection menu). Only one sound type and position can be active at a time, [due to VRChat audio limitation](./faq). The available menu options will reflect the configuration you selected during the setup process.
If you have added additional positions (Custom Positions), the menu names you assigned will appear in this sub-menu.

| Image | Description |
|---|---|
| <img src={useBaseUrl('/img/menu/pcs-menu-mouth.png')} width="128" /> | <div><strong>Mouth</strong><br/>This menu is used to enable oral sounds. When activated, PCS will reposition itself to the mouth target.</div> |
| <img src={useBaseUrl('/img/menu/pcs-menu-boobs.png')} width="128" /> | <div><strong>Boobs</strong><br/>This menu is used to enable paizuri sounds. When activated, PCS will reposition itself to the boobs target.</div> |
| <img src={useBaseUrl('/img/menu/pcs-menu-pussy.png')} width="128" /> | <div><strong>Pussy</strong><br/>This menu is used to enable vaginal sounds. When activated, PCS will reposition itself to the pussy target.</div> |
| <img src={useBaseUrl('/img/menu/pcs-menu-ass.png')} width="128" /> | <div><strong>Ass</strong><br/>This menu is used to enable anal sounds. When activated, PCS will reposition itself to the ass target.</div> |
| <img src={useBaseUrl('/img/menu/pcs-menu-custom.png')} width="128" /> | <div><strong>Custom Position</strong><br/>This is a special menu used to override the default positions, for example, hands and feet.</div> |

:::tip Tip
<img src={useBaseUrl('/img/menu/pcs-menu6.png')} width="540" />
To use the custom position menu.
- First, select the sound (mouth, boobs, pussy, ass), then choose the corresponding custom position.
   - For example, the `Mouth` menu normally plays blowjob sounds at the mouth area. If you also select `Right Hand` custom menu, PCS will be moved from the mouth to the hand instead.
   - As a result, the blowjob sound will be triggered at the right hand rather than the mouth.
   
- Since v1.11.0, if you select the custom position menu alone without the sound selection menu, PCS will use the new sound set made specific for those custom positions.
:::



