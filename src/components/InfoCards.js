import React from "react";
import { Card, Image } from "semantic-ui-react";

export default function InfoCards({
  data, header, image, meta,
  detailNames = [], detailFuns = [] }) {
  return (
    <Card.Group>
      {data.map(item => (
        <Card>
          {[
            item[image] && <Image src={item[image]} />,
            item[header] && <Card.Header>{item[header]}</Card.Header>,
            item[meta] && <Card.Meta>{item[meta]}</Card.Meta>,
            detailNames.length > 0 && <Card.Description>
              {detailNames.map((key, index) => {
                const shallow = item[key];
                const value = typeof shallow === "string" ? shallow : shallow.name;
                return <p>{detailFuns[index](value)}</p>;
              })}
            </Card.Description>
          ]}
        </Card>
      ))}
    </Card.Group>
  );
}