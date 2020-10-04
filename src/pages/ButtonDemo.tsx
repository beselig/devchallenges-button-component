import React from "react";
import "./App.scss";
import { Button } from "../components/Button";

export const ButtonDemo = (): JSX.Element => {
  return (
    <div>
      <div className="button-ct">
        <p>{"<Button />"}</p>
        <Button text="Default" />
      </div>
      <br />
      <div className="button-ct">
        <p>{'<Button variant="outline" />'}</p>
        <Button variant="outline" text="Default" />
      </div>
      <br />
      <div className="button-ct">
        <p>{'<Button variant="text" />'}</p>
        <Button variant="text" text="Default" />
      </div>
      <br />
      <div className="button-ct">
        <p>{"<Button disableShadow />"}</p>
        <Button disableShadow text="Default" />
      </div>
      <br />
      <div className="button-ct">
        <p>{"<Button disabled />"}</p>
        <Button disabled text="Default" />
      </div>
      <div className="button-ct">
        <p>{'<Button variant="text" disabled />'}</p>
        <Button variant="text" disabled text="Default" />
      </div>
      <br />
      <div className="button-ct">
        <p>{'<Button startIcon="local_grocery_store"/>'}</p>
        <Button startIcon="local_grocery_store" text="Default" />
      </div>
      <div className="button-ct">
        <p>{'<Button endIcon="local_grocery_store"/>'}</p>
        <Button endIcon="local_grocery_store" text="Default" />
      </div>
      <br />
      <div className="button-ct">
        <p>{'<Button size="sm" />'}</p>
        <Button size="sm" text="Default" />
      </div>
      <div className="button-ct">
        <p>{'<Button size="md" />'}</p>
        <Button size="md" text="Default" />
      </div>
      <div className="button-ct">
        <p>{'<Button size="lg" />'}</p>
        <Button size="lg" text="Default" />
      </div>
      <br />
      <div className="button-ct">
        <p>{'<Button color="default" />'}</p>
        <Button color="default" text="Default" />
      </div>
      <div className="button-ct">
        <p>{'<Button color="primary" />'}</p>
        <Button color="primary" text="Default" />
      </div>
      <div className="button-ct">
        <p>{'<Button color="secondary" />'}</p>
        <Button color="secondary" text="Default" />
      </div>
      <div className="button-ct">
        <p>{'<Button color="danger" />'}</p>
        <Button color="danger" text="Default" />
      </div>
    </div>
  );
};
