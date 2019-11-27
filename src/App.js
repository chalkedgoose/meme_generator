import React from 'react'
import { Grommet, grommet, Box, Heading, Text, FormField, TextInput, Select } from 'grommet';


function App() {
  const [url, setUrl] = React.useState("https://images.unsplash.com/photo-1495837174058-628aafc7d610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
  const [top, setTop] = React.useState("Nothing like enjoying a wholesome time with the gang.");
  const [bottom, setBottom] = React.useState("At the golden hour.");
  const [textColor, setTextColor] = React.useState("white");
  const [textWeight, setTextWeight] = React.useState("bold");
  return (
    <Grommet full theme={grommet}>
      <Box pad="medium" align="center" justify="center" >
        <Heading>React Meme Generator</Heading>
        <Text>Open Source Meme Generator feel free to create memes and screenshot them.</Text>
        <br />
        <Box pad="medium" alignContent="center" justify="between" direction="column" width="medium" height="medium" background={{ image: `url(${url})` }} >
          <Text weight={textWeight} color={textColor} >{top}</Text>
          <Text weight={textWeight} color={textColor} >{bottom}</Text>
        </Box>
      </Box>
      <Box pad="medium" wrap direction="row" align="center" justify="center" >
        <FormField label="Text Color">
          <Select
            options={['white', 'black', 'pink', 'grey']}
            value={textColor}
            onChange={({ option }) => setTextColor(option)}
          />
        </FormField>
        <FormField label="Image URL">
          <TextInput value={url} onChange={(e) => setUrl(e.target.value)} />
        </FormField>
        <FormField label="Top Text" >
          <TextInput value={top} onChange={(e) => setTop(e.target.value)} />
        </FormField>
        <FormField label="Top Text" >
          <TextInput value={bottom} onChange={(e) => setBottom(e.target.value)} />
        </FormField>
        <FormField label="Select Text Weight" >
          <Select options={['bold', 'normal']} value={textWeight}  onChange={({ option }) => setTextWeight(option)} />
        </FormField>
      </Box>
    </Grommet>
  );
}

export default App;
