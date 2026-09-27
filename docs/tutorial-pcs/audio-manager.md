import useBaseUrl from '@docusaurus/useBaseUrl';

# How to Change Sound Effects

## Preparation

### Audio File Property
- **File Format :** WAV, MP3, or OGG.
- **Clip Length :** Should not more than 1 second for sound effect, or use a suitable duration.
- **Volume :** Keep volume levels consistent across your clips.
- **Trimming :** Remove unnecessary silence at the beginning and end.

### Unity Setting
<img src={useBaseUrl('/img/unity_audio_setting.png')} width="540" />
- **Force to Mono :** Checked.
- **Normalize :** Checked, if you want to normalize the audio.

## Replace The Sounds

### A. Use PCS Audio Manager Tool
This tool provides a quick and simple way to change the sound effects for your PCS. The changes will apply only to the selected asset.

:::tip Tip
Once all sounds have been applied, they will be saved into the selected controller.
You can open it later to manually replace or adjust the audio settings inside each animation state.
:::

1. Open **PCS Audio Manager** tool via `Dismay Custom/Penetration Contact System/PCS Audio Manager`
2. Drag and drop `PCS_Main_Controller` into the box to begin replacing sound effects.
   > also drop `PCS_Voice_Controller` for voices if you want to replace.
3. Select the sound type and add your new audio clips into the slot.
4. Click `Apply New Audio` and `Apply New Voice Pack` to confirm and replace the sounds.
<img src={useBaseUrl('/img/pcs-audio-manager1.png')} width="540" />

### B: Manual Replace
This method allows you to directly change and adjust additional settings, such as randomizing the pitch of the audio. Below is how to do it.

1. Right-click your `PCS_Main_Controller` or `PCS_Voice_Controller` and select `Open`
2. Inside the animator editor, select the layer named `PCS: Audio Controller` to locate all sound states.
3. Select the sound state you want to modify, then drag and drop your audio files into `Clips`.
<img src={useBaseUrl('/img/pcs-audio-manager2.png')} width="960" />

## Explanation of Each Sound Type
| Type | Subtype | Description | Note |
|------|---------|------------|----------------|
| Sound Effect | In | Inward movement sound | Just a short sound play when a penetrator move inward |
| Sound Effect | Out | Outward movement sound | Just a short sound play when a penetrator move outward |
| Sound Effect | Smash | Strong impact sound | There are soft, medium, and hard variants |
| Sound Effect | Exit | Sound played when fully withdrawn | There is no exit sounds for boobs |
| Sound Effect | Gagging | Choking or muffled sounds | Only for mouth |
| Voice | Soft | Moan from light impact | Have a chance to not trigger for a better delay between voices. |
| Voice | Rough | Moan from heavy impact | Have a chance to not trigger for a better delay between voices. |
| Voice | Relax | Plays when idle for a period | Trigger when there is no insertion for a while |
| Voice | Event | Extended moans or phrases | Supports up to 10. If fewer than 10 audio files are assigned, the remaining slots, will be left empty. Event 10 = orgasm voice. |
| Voice | Combo | Sequential voice playback | There are 3 combo set. Which each set can have many voices. |
| Oral | Shallow | A muffled “oof” sound when an object is inserted not very deeply. | Rely on depth value. |
| Oral | Deep | A muffled “oof” sound when an object is inserted deeply. | Rely on depth value. |