import { Component, Input } from '@angular/core';
import { ListableObject } from '../listable-object.model';
import { CollectionElementLinkType } from '../../collection-element-link.type';
import { Context } from '../../../../core/shared/context.model';
import { ViewMode } from '../../../../core/shared/view-mode.model';

@Component({
  selector: 'ds-abstract-object-element',
  template: ``,
})
export class AbstractListableElementComponent<T extends ListableObject> {
  /**
   * The object to render in this list element
   */
  @Input() object: T;

  /**
   * The link type to determine the type of link rendered in this element
   */
  @Input() linkType: CollectionElementLinkType;

  /**
   * The identifier of the list this element resides in
   */
  @Input() listID: string;

  /**
   * The index of this element
   */
  @Input() index: number;

  /**
   * Whether to show the badge label or not
   */
  @Input() showLabel = true;

  /**
   * The context we matched on to get this component
   */
  @Input() context: Context;

  /**
   * The viewmode we matched on to get this component
   */
  @Input() viewMode: ViewMode;

  /**
   * The available link types
   */
  linkTypes = CollectionElementLinkType;

  /**
   * The available view modes
   */
  viewModes = ViewMode;

  /**
   * The available contexts
   */
  contexts = Context;
}
