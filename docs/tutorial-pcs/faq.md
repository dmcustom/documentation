---
title: FAQ / Troubleshooting
hide_title: true
---

# Frequently Ask Question

These are the most frequently asked questions, along with explanations for why these issues occur.

## Why There Is No Sound During Testing in Unity
- Make sure the scene has a **Camera** positioned close to your avatar.
- Ensure that **Mute Audio** button is not enabled in the Game window.
- Use the latest version of [Gesture Manager](https://booth.pm/ja/items/3922472?srsltid=AfmBOorNhyQC8H3uU0CpaEoEBfJrnelkaT5MD-GRcsTh3hPsHCpz7B_i) to simulate interactions during testing.

## Why Aren’t DPS Triggering Sounds?
Legacy DPS does not include Avatar Contact Sender by default, so it cannot interact with PCS. In this case, it can be [upgraded to DPS+ using VRCFury](https://vrcfury.com/sps/) to enable compatibility.
You can also just use the SPS Plug instead.

## Why Aren’t World Props Triggering Sounds?
World props do not include Avatar Contact Sender by default, which is required for interaction with PCS. However, starting from the **SDK 3.10.0**, it is now possible to add Contact components to world objects.

## How to Add a Contact and Make It Interact With PCS?
1. Create an empty GameObject, then add the `VRC Contact Sender` component to it.
2. Adjust the shape, radius, and other settings as needed.
3. Under **Collision Tags**, click **Add**, select `Custom`, and enter: `PCS_Penetrating`

## Why Does My PCS Object Have Missing Scripts?
Please make sure you have installed the correct Avatar Tool for your package, either Modular Avatar or VRCFury.

## How to Fix Incorrect Scaling (Too Big or Too Small)?
This issue is caused by your avatar’s Armature scale not being set to (1,1,1), which results in PCS being placed too large or too small. This is not your fault.
- To fix this, simply adjust the scale of the GameObject called `PCS Contact` to make it larger or smaller as needed.

## PCS Has No Sound (Not Working) After Updateing!!
This issue may occur if you updated PCS to a different version. Some functions may stop working properly due to changes in the prefab version or missing components that were modified or removed during the update.
- To resolve this issue, simply reinstall PCS on your avatar to ensure you are using the updated prefab version.

## Why Can’t It Play Multiple Sound Types at the Same Time?
- VRChat applies optimization limits to Audio Sources (Unity terms: “Virtual Voices” / “Real Voices”),
allowing only 3 audible audio to play simultaneously. When a fourth sound attempts to play, one of the currently playing sounds may be cut off.
- PCS is designed to efficiently manage all sound effect types within 3 available Audio Sources. Due to this platform limitation, it cannot exceed this cap.
If VRChat increases the Audio Source limit in the future, additional layered sounds—such as fur effects playing alongside impact sounds—may become possible.