---
name: Components
route: /
---

import Input from './src/Components/UI/Input.js'
import {Playground} from 'docz'

# Components

Here you will know how the components of this app works and how they're build

## UI Components

We will start showing you the UI components used all around the application they give the
visual identity for the app

### Loader

The loader component shows an animation the app is waiting for a response from the API or 
any other process that can take a long time

<table>
    <tr>
        <th colspan="4">Props</th>
    </tr>
    <tr>
        <th>Prop Name</th>
        <th>Prop type</th>
        <th>Prop Function</th>
        <th>Is optinal</th>
    </tr>
    <tr>
        <td>
            isDark
        </td>
        <td>
            boolean
        </td>
        <td>
            Prop used to switch the color theme
        </td>
        <td>
            No
        </td>
    </tr>
</table>

### Input

The Input component is used as a the searchbar the text on it is sent to the api to filter the countries showed
<Playground>
    <Input isDark changed={() => {}}/>
</Playground>

    
    
