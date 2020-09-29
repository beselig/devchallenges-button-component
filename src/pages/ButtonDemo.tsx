import React from "react";
import "./App.scss";
import { Button } from "../components/Button";

export const ButtonDemo = (): JSX.Element => {
  return (
    <div>
      <div className="button-ct">
        <p>{"<Button />"}</p>
        <Button />
      </div>
      <br />
      <div className="button-ct">
        <p>{'<Button variant="outline" />'}</p>
        <Button variant="outline" />
      </div>
      <br />
      <div className="button-ct">
        <p>{'<Button variant="text" />'}</p>
        <Button variant="text" />
      </div>
      <br />
      <div className="button-ct">
        <p>{"<Button disableShadow />"}</p>
        <Button disableShadow />
      </div>
      <br />
      <div className="button-ct">
        <p>{"<Button disabled />"}</p>
        <Button disabled />
      </div>
      <div className="button-ct">
        <p>{'<Button variant="text" disabled />'}</p>
        <Button variant="text" disabled />
      </div>
      <br />
      <div className="button-ct">
        <p>{'<Button startIcon="local_grocery_store"/>'}</p>
        <Button startIcon="local_grocery_store" />
      </div>
      <div className="button-ct">
        <p>{'<Button endIcon="local_grocery_store"/>'}</p>
        <Button endIcon="local_grocery_store" />
      </div>
      <br />
      <div className="button-ct">
        <p>{'<Button size="sm" />'}</p>
        <Button size="sm" />
      </div>
      <div className="button-ct">
        <p>{'<Button size="md" />'}</p>
        <Button size="md" />
      </div>
      <div className="button-ct">
        <p>{'<Button size="lg" />'}</p>
        <Button size="lg" />
      </div>
      <br />
      <div className="button-ct">
        <p>{'<Button color="default" />'}</p>
        <Button color="default" />
      </div>
      <div className="button-ct">
        <p>{'<Button color="primary" />'}</p>
        <Button color="primary" />
      </div>
      <div className="button-ct">
        <p>{'<Button color="secondary" />'}</p>
        <Button color="secondary" />
      </div>
      <div className="button-ct">
        <p>{'<Button color="danger" />'}</p>
        <Button color="danger" />
      </div>
    </div>
  );
};
