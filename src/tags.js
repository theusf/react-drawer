import * as React from "react";
import { Tag, VARIANT } from "baseui/tag";

export default () => {
    return (
        <>
            <Tag variant={VARIANT.solid}>this is a tag</Tag>
            <Tag variant={VARIANT.solid}>this is a tag</Tag>
            <Tag variant={VARIANT.solid}>this is a tag</Tag>
            <Tag variant={VARIANT.solid}>this is a tag</Tag>
        </>
    )
}