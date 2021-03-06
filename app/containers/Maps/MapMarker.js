import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { SourceReader, PapperBlock } from 'dan-components';
import { BasicMarker, PopoverMarker } from './demos';
import Info from './Info';

function MapMarker() {
  const title = brand.name + ' - Map';
  const description = brand.desc;
  const docSrc = 'containers/Maps/demos/';
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <PapperBlock overflowX title="Map with a Marker" desc="A sample for basic mark a coodinate in map">
        <Info />
        <BasicMarker />
        <SourceReader componentName={docSrc + 'BasicMarker.js'} />
      </PapperBlock>
      <PapperBlock overflowX title="Marker with Popover/Info Window" desc="Click marker to show detail place">
        <Info />
        <PopoverMarker />
        <SourceReader componentName={docSrc + 'PopoverMarker.js'} />
      </PapperBlock>
    </div>
  );
}

export default MapMarker;
